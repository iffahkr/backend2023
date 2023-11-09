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

        // handling jika data kosong
        if ($students->isEmpty()) {
            $data = [
                'message'=> 'Data not found',
                'data'=> []
            ];

            return response()->json($data, 200);
        } 
        // handling jika database tidak ada
        else {
            $data = [
                'message'=> 'Database not found',
                'data'=> []
            ];

            return response()->json($data,404);
        }
    }

    // membuat method store
    public function store(Request $request) {

        // untuk memvalidasi masing-masing data (harus diisi)
        $request->validate([
            'nama'=> 'required',
            'nim'=> 'required',
            'email'=> 'required | email',
            'jurusan'=> 'required'
        ]);

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

        // mengembalikan dalam bentuk bahasa (json) dan kode 201
        return response()->json($data, 201);
    }

    public function update(Request $request, $id) {
        // cari id student yang ingin diupdate
        // find-> mendapatkan data student yg berupa primary key (id)
        $student = Student::find($id); 

        if ($student) {
            // menangkap data request
            $input = [
                'nama'=> $request->nama ?? $student->nama,
                'nim'=> $request->nim ?? $student->nim,
                'email'=> $request->email ?? $student->email,
                'jurusan'=> $request->jurusan ?? $student->jurusan
            ];
        
            // melakukan update data
            $student->update($input);

            $data = [
                'message'=> 'Data siswa telah berhasil di perbaharui',
                'data'=> $student
            ];

            // mengembalikan dalam bentuk data json dan kode 200 (success)
            return response()->json($data, 200);
        }
        else {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }
        
    }

    public function destroy($id) {
        // cari id student yang ingin dihapus
        $student = Student::find($id);

        if ($student) {
            // hapus student tersebut
            $student->delete();

            $data = [
                'message'=> 'Data siswa berhasil dihapus'
            ];

            // mengembalikan data (json) dan kode 200
            return response()->json($data, 200);
        }
        else {
            $data = [
                'message'=> 'Student not found'
            ];

            return response()->json($data, 404);
        }
    }

    // mendapatkan detail resource student
    // membuat method show
    public function show($id) {
        // cari id student yang ingin didapatkan
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message'=> 'Get detail student',
                'data'=> $student
            ];

            // mengembalikan data (json) dan kode 200
            return response()->json($data, 200);
        } 
        else {
            $data = [
                'message'=> 'Student not found'
            ];

            // mengembalikan data (json) dan kode 404
            return response()->json($data, 404);
        }
    }
}
