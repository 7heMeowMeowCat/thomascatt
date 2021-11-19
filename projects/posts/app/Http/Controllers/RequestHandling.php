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
        $redirect_location = "/";
        function submitPost($request) {
            $result = DB::insert('insert into posts (author, content) values(?, ?)', [Auth::user()->name, $request->content]);
        }

        $action = $request->action;
        if ($action == "submit") submitPost($request);

        return redirect($redirect_location);
    }
}
