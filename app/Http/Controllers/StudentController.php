<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
// mengimport model Student
// digunakan untuk berinteraksi dengan database
use App\Models\Student;


class StudentController extends Controller
{
    // membuat method index
    public function index() {
        // menampilkan data student dari database
        $students = Student::all();

        $data = [
            'message' => 'Get all students',
            'data'=> $students
        ];

        // mengirim data (json) dan kode 200
        return response()->json($data, 200);
    }

    // membuat method store
    public function store(Request $request) {
        // menangkap data request
        $input = [
            'nama' => $request->nama,
            'nim'=> $request->nim,
            'email'=> $request->email,
            'jurusan' => $request->jurusan
        ];

        // menggunakan model Student untuk insert data
        $student = Student::create($input);

        $data = [
            'message'=> 'Student is created successfully',
            'data'=> $student,
        ];

        // mengembalikan dalam bentuk bahasa data (json) dan kode 201
        return response()->json($data, 201);
    }

    public function update(Request $request, $id) {
        $input = [
            'nama'=> $request->nama,
            'nim'=> $request->nim,
            'email'=> $request->email,
            'jurusan'=> $request->jurusan
            ];
        
        Student::where('id', $id)->update($input);
    }

    public function destroy($id) {
        Student::where('id', $id)->delete();
    }
}
