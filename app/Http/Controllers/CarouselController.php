<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CarouselController extends Controller
{
    public function getCarousel()
    {
        return response()->json([
          [
            'image' => '/images/banner/01.png',
            'heading' => 'First slide label',
            'paragraph' => 'Some representative placeholder content for the first slide.'
          ],
          [
            'image' => '/images/banner/02.png',
            'heading' => 'Second slide label',
            'paragraph' => 'Some representative placeholder content for the second slide.'
          ],
          [
            'image' => '/images/banner/03.png',
            'heading' => 'Third slide label',
            'paragraph' => 'Some representative placeholder content for the third slide.'
          ],
          [
            'image' => '/images/banner/04.png',
            'heading' => 'Fourth slide label',
            'paragraph' => 'Some representative placeholder content for the fourth slide.'
          ],
          [
            'image' => '/images/banner/05.png',
            'heading' => 'Fifth slide label',
            'paragraph' => 'Some representative placeholder content for the fifth slide.'
          ]
        ]);
    }
}
