@section('header')
    <header>
        <ul class="heaer_nav circleBehind">
            <!-- Left Side Of Navbar --->
            <li class="nav_item"><a href="/" class="nav-link">Topページへ</a></li>
            <!-- Right Side Of Navbar -->
            <li class="navbar-nav nav_item">
                <!-- Authentication Links -->
                @guest
                    <a href="/home" class=nav-link>美容師の方はこちら</a>
                @else
                    <a href="/home" class="nav-link">マイページはこちら</a>
                @endguest
            </li>
        </ul>
    </header>
@endsection
