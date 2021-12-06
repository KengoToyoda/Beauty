<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>@yield('title')</title>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="keywords" content="@yield('keywords')">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <!-- Styles -->
        <link href="{{ asset('css/reset.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/layout.css') }}" rel="stylesheet" type="text/css">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
        <!--Material UI-->
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />  
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
    </head>
    <body>
        <div class="wrap">
            @yield('header')
            <section class="contents">
                    <!-- コンテンツ -->
                    @yield('content')
            </section>
            @yield('footer')
        </div>
    </body>
        <!-- Js -->
        <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</html>


