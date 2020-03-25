<?php


Route::get('/', function () {
    return view('dashboard');
});

Route::get('/{path?}', function () {
    return view('dashboard');
})->where('path', '.*');
