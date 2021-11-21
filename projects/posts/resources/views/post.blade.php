@extends('layouts.app')

@section('content')
<div hidden id="post_id"><?= $post_id ?></div>
<div id="root">

</div>
@endsection

@section('scripts')
<script src="{{ asset('js/post.js') }}"></script>
@endsection
