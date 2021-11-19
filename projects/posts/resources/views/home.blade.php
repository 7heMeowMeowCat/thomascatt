@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-7">
            <div class="card">
                <div class="card-header">
                    Logged in as <b><?= Auth::user()->name; ?></b> - <a href="logout">logout</a> <sub>mce</sub>
                </div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form action="/" method="POST">
                        @csrf
                        <input type="hidden" name="action" value="submit">
                        <div class="input-group">
                            <textarea required class="form-control" rows="1" name="content" placeholder="Post something..." style="resize: none;"></textarea>
                            <button class="btn btn-outline-primary group-append">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-lg-7">
            <br><h2>Your Feed</h2>
            <?php 
                use Illuminate\Support\Facades\DB;
                $posts = DB::select('select * from posts order by created_at desc');
                foreach ($posts as $post) {
                    $likes = json_decode($post->likes);
                    $own_post =  ($post->author == Auth::user()->name);
                    if ($likes == null) $likes = [];
                    $phpdate = strtotime($post->created_at);
            ?>
                    <div class="card post <?= !$own_post ?: 'ownpost' ?>">
                        <div class="card-header">
                            <?php
                                if ($post->author == Auth::user()->name) echo "<b>Your Post</b>";
                                else echo "<b>$post->author</b> submitted a post";
                                echo "<span style='float: right;'>$phpdate</span>";
                            ?>
                            
                        </div>
                        <div class="card-body">
                            <p style="font-size: 24px;"><?=$post->content?></p>
                            <hr>
                            <button class="btn btn-outline-primary btn-sm">
                                <i class="fa fa-thumbs-up"></i>
                                <?php $likes_count = count($likes); echo "$likes_count"; ?>
                            </button>                            
                            <a href="posts/<?=$post->id?>" style="float: right;" class="primary-link" style="background-color: #4685f4;">
                                View Comments
                            </a>
                        </div>
                    </div>
                <?php }?>
       </div>
    </div>
</div>

@endsection

<script src="{{ asset('js/home.js') }}" defer></script>
