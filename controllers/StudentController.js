// TODO 3: Import data students dari folder data/students.js

const students = require("../data/students");


// membuat Class StudentController
class StudentController {
    index(req, res) {
        // TODO 4: Tampilkan data students.
        const data = {
            message: "Menampilkan semua students",
            data: students,
        };

        // menampilkan response berupa data json
        res.json(data);
    }

    store(req, res) {
        // TODO 5: Tambahkan data students
        const {nama} = req.body;

        const data = {
            message: `Menambahkan data student: ${nama}`,
            data: students,
        };

        // menampilkan response berupa data json
        res.json(data);
    }

    update(req, res) {
        // TODO 6: Update data students
        const {id} = req.params;
        const {nama} = req.body;

        const data = {
            message: `Mengedit student dengan index ${id} dan nama ${nama}`,
            data: students,
        };

        // menampilkan response berupa data json
        res.json(data);
    }

    destroy(req, res) {
        // TODO 7: Hapus data students
        const {id} = req.params;

        // menggunakan splice untuk menghapus index
        students.splice(id, 1);

        const data = {
            message: `Menghapus student id ${id}`,
            data: students,
        };

        // menampilkan response berupa data json
        res.json(data);
    }
}

// membuat object StudentController
const object = new StudentController();

// export object StudentController
module.exports = object;