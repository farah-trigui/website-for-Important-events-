<?php
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CorsMiddleware;

use App\Models\Event;



Route::middleware([CorsMiddleware::class])->group(function () {
    Route::get('/', function () {
        return 'Laravel is running ';
    });
    Route::get('/event-stats', function () {
        $importantEvents = Event::all(); // for debugging
        $count = $importantEvents->count();
        $earliest = $importantEvents->min('date');
        $latest = $importantEvents->max('date');

        return response()->json([
            'count' => $count,
            'earliest' => $earliest,
            'latest' => $latest,
        ]);
    });

    Route::get('/event-stats-data', function () {
        return Event::orderBy('date')->get();
    });

   

});