<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;//画像操作
use App\User;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('mypage/home');
    }
    
    public function fetchStylist() 
    {
        $user = Auth::user();
        return response()->json($user);
    }
    
    public function updateStylist(Request $request, User $user) 
    {
        $user->name = $request->name;
        $user->email = $request->email;
        $user->age = $request->age;
        $user->sex = $request->sex;
        $user->role = $request->role;
        $user->save();
        
        // dd($user);
        
        // $user_id = Auth::id();
        // $user = User::find($user_id);
        
        return response()->json($user);
    }
    
    public function updateStylistImage(Request $request, User $user) 
    {
        if($request->image){
            Storage::disk('s3')->delete('stylist/' . $user->image); //元の画像を削除☆
            $photo = $request->image;
            $photo_name = $photo->getClientOriginalName();
            Storage::disk('s3')->putFileAs('stylist/',$photo,$photo_name);
            $user->image = $photo_name;
            $user->save();
        }
        
        // $user_id = Auth::id();
        // $user = User::find($user_id);
        return response()->json($user);
    }
}
