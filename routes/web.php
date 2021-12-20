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
    // Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/home/fetchStylist', 'HomeController@fetchStylist');
    Route::put('/home/{user}', 'HomeController@updateStylist')->name('home.update');
    Route::put('/home/mainImage/{user}', 'HomeController@updateStylistImage')->name('home.update');
    
    Route::post('/home/menu/{user}', 'MenuController@store');
    
    Route::get('/{any}', function(){
        return view('client/top');
    })->where('any', '.*');
});


