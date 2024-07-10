<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return view('welcome');
});

Route::get('{any}', function () {
    return view('appHome');
})->where('any', '.*');

Auth::routes();
