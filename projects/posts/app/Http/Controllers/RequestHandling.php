<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class RequestHandling extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        try {
            function removeFromArray($array, $value) {
                if (in_array($value, $array)) {
                    unset($array[array_search($value, $array)]);
                    $array = array_values($array);
                }
                return $array;
            }
            
            function submitPost($request) {
                $description = isset($request->description) ? $request->description  : "";
                $result = DB::insert('insert into posts (author, content, description, likes, dislikes) values(?, ?, ?, ?, ?)', [Auth::user()->name, $request->content, $description, '[]', '[]']);
                return json_encode($result);
            }

            function addComment($request) {
                $result = DB::insert('insert into comments (post_id, author, content, likes, dislikes) values(?, ?, ?, ?, ?)', [$request->post_id, Auth::user()->name, $request->content, '[]', '[]']);
                return json_encode([]);
            }

            function getPost($request) {
                $post = DB::select('select * from posts where id = ? order by created_at desc', [$request->id]);
                if (array_key_exists(0, $post))
                    return json_encode($post[0]);
                return json_encode(['error' => 'Post Not Found']);

            }

            function getComments($request) {
                $comments = DB::select('select * from comments where post_id = ? order by created_at asc', [$request->id]);
                if (array_key_exists(0, $comments))
                    return json_encode($comments);
                return json_encode([]);

            }
    
            function loadPosts($request) {
                $posts = DB::select('select * from posts order by created_at desc');
                foreach ($posts as $post) {
                    $likes = json_decode($post->likes);
                    $own_post =  ($post->author == Auth::user()->name);
                    if ($likes == null) $likes = [];
                    $phpdate = strtotime($post->created_at);
                }
                return $posts;
            }
    
            function likePost($request, $setAction, $like, $table) {
                $post = DB::select("select * from $table where id = ? order by created_at desc", [$request->id])[0];

                $post_likes = json_decode($post->likes);
                $post_dislikes = json_decode($post->dislikes);

                $list_to_modify = $like ? $post_likes : $post_dislikes;
                $other_list = $like ? $post_dislikes : $post_likes;
                
                if ($setAction) {
                    if (!in_array(Auth::user()->name, $list_to_modify))
                    $other_list = removeFromArray($other_list, Auth::user()->name);
                    $list_to_modify[] = Auth::user()->name;
                } else {
                    $list_to_modify = removeFromArray($list_to_modify, Auth::user()->name);
                    $other_list = removeFromArray($other_list, Auth::user()->name);
                }

                $post_likes = $like ? $list_to_modify : $other_list;
                $post_dislikes = $like ? $other_list : $list_to_modify;

                $l = json_encode($post_likes);
                $d = json_encode($post_dislikes);
                $i = $request->id;
                DB::update("update $table set likes = '$l', dislikes = '$d' where id = $i");

                return [
                    'action' => ($setAction ? 'Added ' : 'Removed ') . 'a ' . ($like ? 'like' : 'dislike') . ' to '.($table).'. Likes and dislikes are:',
                    'likes' => $post_likes,
                    'dislikes' => $post_dislikes
                ]; 
            }

            function handleLikeCall($request, $action) {
                return likePost($request, in_array($action, ['likePost', 'dislikePost']), $request->like, $request->post ? 'posts' : 'comments');
            }
    
            $action = $request->action;
            if ($action == 'submit') return submitPost($request);
            else if ($action == "addComment") return addComment($request);
            else if ($action == "getPost") return getPost($request);
            else if ($action == "getComments") return getComments($request);
            else if ($action == "loadPosts") return loadPosts($request);
            else if (in_array($action, ['likePost', 'unlikePost', 'dislikePost', 'undislikePost'])) return handleLikeCall($request, $action);
            else return json_encode(["Unknown action: $action"]);
    
            return redirect("/");
    
        } catch (e) {
            return json_encode(e);
        }
    }
}
