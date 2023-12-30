// import model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  // refactor untuk menghandling jika data kosong (short if else)
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    // data array lebih dari 0
    if (students.length > 0) {
      const data = {
        message: "Menampilkan semua students",
        data: students,
      };
  
      return res.status(200).json(data);
    }

    // else
      const data = {
        message: "Student is empty",
      };

      return res.status(200).json(data);
  }

  async store(req, res) {
    /**
     * Menambahkan validasi sederhana
     * Handle jika salah satu data tidak dikirim, memakai short if else
     */

    // destructing object req.body
    const { nama, nim, email, jurusan } = req.body;

    // jika data undefined maka kirim response error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: "Semua data harus dikirim",
      };

      return res.status(422).json(data);
    }

    // else
    const student = await Student.create(req.body);

    const data = {
      message: "Menambahkan data student",
      data: student,
    };

    return res.status(201).json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: [],
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus student id ${id}`,
      data: [],
    };

    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;