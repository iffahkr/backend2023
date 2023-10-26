<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    # buat property animals (array)
    public $animals = ["kucing", "ayam", "ikan"];

    // membuat method get
    public function index()
    {
        # tampilkan data animals
        foreach ($this->animals as $animal) {
            echo "Menampilkan data animals ";
            echo $animal;
            echo "<br>";
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        # menambahkan hewan baru
        $newAnimal = "Musang";
        echo "Nama hewan: " . $newAnimal;
        echo "<br>";
        // menambah musang ke dalam array
        echo "Menambahkan hewan baru";
        array_push($this->animals, $newAnimal);
        echo "<br>";
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        # mengupdate data hewan
        $this->animals[$id] = $request;
        echo "Nama hewan: $request->nama";
        echo "<br>";
        // meng-update hewan baru "burung" ke dalam array
        echo "Mengupdate data hewan id $id";
        echo "<br>";

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        # menghapus data hewan
        array_splice($this->animals, $id, 1);
        echo "Menghapus data hewan id $id";
    }
}
