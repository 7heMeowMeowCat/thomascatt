<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/', 'RequestHandling');

Route::get('/', function () {
    if (Auth::check())
        return view('home');
    return redirect('/login');
});

Route::get('logout', function () {
    Auth::logout();
    return redirect('/login');
});

Route::get('posts/{post_id}', function ($post_id) {
    return view('post', ['post_id' => $post_id]);
});

Route::get('posts', function () {
    return redirect('/');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
