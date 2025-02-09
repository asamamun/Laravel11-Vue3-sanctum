<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\CarouselController;
use App\Http\Controllers\UserController;
use App\Models\User;

Route::controller(AuthController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});
Route::get("carousel", [CarouselController::class, 'getCarousel']);

// Admin routes
Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    // Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);
    Route::get('/allusers', function (Request $request) {
        return User::all();
    });
    Route::resource('users', UserController::class);
    
});
// Other routes that don't require admin role
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    
    // Route::post('/logout', [AuthController::class, 'logout']);
});
