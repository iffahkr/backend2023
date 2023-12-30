// import model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    /**
     * TODO 2: memanggil method create.
     * Method create mengembalikan data yang baru diinsert.
     * Mengembalikan response dalam bentuk json.
     */
    const students = await Student.create(req.body);

    const data = {
      message: "Menambahkan data student",
      data: students,
    };

    res.json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    // cari id student yang ingin diupdate
    const student = await Student.find(id);

    if (student) {
      // melakukan update data
      const student = await Student.update(id, req.body);
      const data = {
        message: `Mengedit data student`,
        data: student,
      };

      res.status(200).json(data);
    }
    else {
      const data = {
        message: `Student not found`,
      };

      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    // menangkap id untuk menemukan data yg ingin dihapus
    const { id } = req.params;
    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: `Menghapus data students`,
      };

      res.status(200).json(data);
    }
    else {
      const data = {
        message: `Student not found`,
      };

      res.status(404).json(data);
    }
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  async show(req, res) {
    const { id } = req.params;
    // cari student berdasarkan id
    const student = await Student.find(id);

    // handling jika database tidak ditemukan
    if (student) {
      const data = {
        message: `Menampilkan detail students`,
        data: student,
      };

      // mengembalikan status 200 dalam bentuk data json
      res.status(200).json(data);
    }
    else {
      const data = {
        message: `Student not found`,
      };

      // mengembalikan status 404 dalam bentuk data json
      res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;