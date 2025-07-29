<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Event;

Route::post('/events', function (Request $request) {
    return Event::create([
        'title' => $request->input('title'),
        'date' => $request->input('date'),
        'location' => $request->input('location'),
        'note' => $request->input('note'),
    ]);
});


Route::get('/events/{id}', function ($id) {
    return Event::findOrFail($id);
});

Route::put('/events/{id}', function (Request $request, $id) {
    $event = Event::findOrFail($id);
    $event->update([
        'title' => $request->input('title'),
        'date' => $request->input('date'),
        'location' => $request->input('location'),
        'note' => $request->input('note'),
    ]);
    return $event;
});
