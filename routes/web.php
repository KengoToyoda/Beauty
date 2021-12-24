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

Auth::routes();

Route::group(['middleware' => ['auth']], function () {
    
    Route::get('/react/user', 'HomeController@getUser');
    Route::get('/home/fetchStylist', 'HomeController@fetchStylist');
    Route::get('/home/fetchMenu', 'MenuController@fetchMenus');
    Route::get('/home/fetchMenu/{menu}', 'MenuController@fetchMenu');
    
    Route::put('/home/{user}', 'HomeController@updateStylist')->name('home.update');
    Route::put('/home/mainImage/{user}', 'HomeController@updateStylistImage')->name('home.update');
    
    Route::post('/home/menu/{menu}', 'MenuController@store');
    Route::put('/home/menu/{menu}', 'MenuController@update');
    
    Route::get('/{any}', function(){
        return view('client/top');
    })->where('any', '.*');
});


