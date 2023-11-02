<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    // membuat fungsi getStudents di model Student
    protected $table = "students";
    // define model attributes to make mass assignable
    protected $fillable = ['nama', 'nim', 'email','jurusan'];
}
