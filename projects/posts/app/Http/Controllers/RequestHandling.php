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
            $redirect_location = "/";
            function submitPost($request) {
                echo "Posting";
                $result = DB::insert('insert into posts (author, content, likes) values(?, ?, ?)', [Auth::user()->name, $request->content, '[]']);
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
    
            function likePost($request, $like) {
                $post = DB::select('select * from posts where id = ? order by created_at desc', [$request->id])[0];

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
                DB::update("update posts set likes = '$l' where id = $i ");
                return $post_likes; 
            }
    
            $action = $request->action;
            if ($action == "submit") submitPost($request);
            else if ($action == "loadPosts") return loadPosts($request);
            else if ($action == "likePost") return likePost($request, true);
            else if ($action == "unlikePost") return likePost($request, false);
            else return json_encode(["Unknown action: '$action'", $request->action]);
    
            return redirect("/");
    
        } catch (e) {
            return json_encode(e);
        }
    }
}
