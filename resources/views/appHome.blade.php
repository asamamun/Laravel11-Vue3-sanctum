<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SPA Authentication using Laravel 11 Sanctum, Vue 3 and Vite</title>
        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        @vite(['resources/js/app.js'])
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
    </body>
</html>
