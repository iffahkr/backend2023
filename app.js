// import express
const express = require("express");

// import router
const router = require("./routes/api.js");

// membuat object express
const app = express();

/**
 * Membuat routing
 * Method get menerima 2 params
 * Param 1 adalah endpoint
 * Param 2 callback
 * Callback menerima object req dan res
 */

// mendefinisikan kode untuk mengubah data ke json (middleware)
app.use(express.json());
app.use(express.urlencoded());

// menggunakan routing (router)
app.use(router);

// mendefinisikan port
app.listen(8000);

// app.get("/students", (req, res) => {
//     res.send("Menampilkan semua students");
// });

// app.post("/students", (req, res) => {
//     res.send("Menambahkan data student");
// });

// app.put("/students/:id", (req, res) => {
//     const { id } = req.params;
//     res.send(`Mengedit student ${id}`);
// });

// app.delete("/students/:id", (req, res) => {
//     const { id } = req.params;
//     res.send(`Mengedit student ${id}`);
// });