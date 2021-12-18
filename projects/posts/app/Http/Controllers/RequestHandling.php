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
            function submitPost($request) {
                $result = DB::insert('insert into posts (author, content, description, likes) values(?, ?, ?)', [Auth::user()->name, $request->content, $request->description, '[]']);
            }

            function addComment($request) {
                $result = DB::insert('insert into comments (post_id, author, content, likes) values(?, ?, ?, ?)', [$request->post_id, Auth::user()->name, $request->content, '[]']);
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
    
            function likePost($request, $like, $table) {
                $post = DB::select("select * from $table where id = ? order by created_at desc", [$request->id])[0];

                $post_likes = json_decode($post->likes);
                if ($like) {
                    if (!in_array(Auth::user()->name, $post_likes))
                    $post_likes[] = Auth::user()->name;
                } else {
                    if (in_array(Auth::user()->name, $post_likes)) {
                        unset($post_likes[array_search(Auth::user()->name, $post_likes)]);
                        $post_likes = array_values($post_likes);
                    }
                }
                $l = json_encode($post_likes);
                $i = $request->id;
                DB::update("update $table set likes = '$l' where id = $i ");
                return $post_likes; 
            }

            function handleLikeCall($request, $action) {
                return likePost($request, $action == 'likePost', $request->post ? 'posts' : 'comments');
            }
    
            $action = $request->action;
            if ($action == 'submit') submitPost($request);
            else if ($action == "addComment") return addComment($request);
            else if ($action == "getPost") return getPost($request);
            else if ($action == "getComments") return getComments($request);
            else if ($action == "loadPosts") return loadPosts($request);
            else if (in_array($action, ['likePost', 'unlikePost'])) return handleLikeCall($request, $action);
            else return json_encode(["Unknown action: $action"]);
    
            return redirect("/");
    
        } catch (e) {
            return json_encode(e);
        }
    }
}
