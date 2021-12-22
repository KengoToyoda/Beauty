<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Menu;
use Illuminate\Support\Facades\Storage;//画像操作
use Auth;

class MenuController extends Controller
{
    public function store(Request $request, Menu $menu)
    {
        if($request->image){
            $photo = $request->image;
            $photo_name = $photo->getClientOriginalName();
            Storage::disk('s3')->putFileAs('menu/',$photo,$photo_name);
            $menu->image = $photo_name;
        }
        $menu->title = $request->title;
        $menu->desc = $request->desc;
        $menu->price = $request->price;
        $menu->time = $request->time;
        $menu->user_id = Auth::id();
        $menu->save();
        
        $menus = Menu::all();
        return response()->json($menus);
    }

    public function fetchMenu()
    {
        $user_id = Auth::id();
        $menus = Menu::where('user_id', $user_id)->get();
        
        return response()->json($menus);
    }
}
