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

        $animal->index();
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
    public function store($animal, Request $request)
    {
        # menambahkan hewan baru
        // menambah musang ke dalam array
        echo "Menambahkan hewan baru";
        array_push($this->animals);
        echo "<br>";

        $animal->store('Musang');
        $animal->index();
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
    public function update($animal, Request $request, $id)
    {
        # mengupdate data hewan
        $this->animals[1] = $request;
        echo "Nama hewan: $request->nama";
        echo "<br>";
        // meng-update hewan baru "burung" ke dalam array
        echo "Mengupdate data hewan id $id";
        echo "<br>";

        $animal->update(1, "Kucing");
        $animal->index();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($index, $animal, $id)
    {
        # menghapus data hewan
        array_splice($this->animals, $index,  1);
        echo "Menghapus data hewan id $id";

        $animal->destroy($id);
        $animal->index();
    }
}

/* 
    Nama        : Iffah Karimah
    Kelas       : SE03 / TI02
    NIM         : 0110222181
*/
