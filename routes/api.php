<?php

use Illuminate\Http\Request;

Route::post('login', 'UserController@authenticate');
Route::post('register', 'UserController@register');
Route::post('checkIfEmailExists', 'UserController@checkIfEmailExists');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', 'UserController@getAuthenticatedUser');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
