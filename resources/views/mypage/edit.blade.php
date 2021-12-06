@extends('layouts.template')

@section('title', 'pont')
@section('keywords', '美容師', '美容師アシスタント')
@section('description', '美容師アシスタント紹介サービスです')

@include('layouts.header')
@section('content')

<div class="container">
    <h1>美容師情報編集画面</h1>
    <form action="{{ route('home.update', $user->id) }}" method="POST" enctype='multipart/form-data'>
        @csrf
        @method('PUT')
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">名前</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" name="user[name]" value="{{ $user->name }}">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">メールアドレス</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" name="user[email]" value="{{ $user->email }}">
            </div>
        </div>
        <fieldset class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">性別</label>
            <div class="col-sm-10">
              <div class="form-check">
                <input class="form-check-input" type="radio" name="user[sex]" value="1">
                <label class="form-check-label" for="gridRadios1">
                  男性
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="user[sex]" value="0">
                <label class="form-check-label" for="gridRadios2">
                  女性
                </label>
              </div>
            </div>
        </fieldset>
       <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">プロフィール画像</label>
            <div class="col-sm-10">
                <input class="form-control" type="file" id="formFile" name="image">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">年齢</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" name="user[age]" value="{{ $user->age }}">
            </div>
        </div>
        <input name="user[role]" type="hidden" value="stylist">
        <button type="submit" class="btn btn-primary">保存</button>
    </form>
    <div class="back">[<a href="/account/{{ $user->id }}">back</a>]</div>
</div>
@endsection

@include('layouts.footer')