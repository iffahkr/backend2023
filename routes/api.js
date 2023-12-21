// import express
const express = require("express");

// membuat object router
const router = express.Router();

// import StudentController
const StudentController = require("../controllers/StudentController.js");

/**
 * Membuat routing
 * Method get menerima 2 params
 * Param 1 adalah endpoint
 * Param 2 callback
 * Callback menerima object req dan res
 */
router.get("/", (req, res) => {
    res.send("Hello Express");
});

// routing students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export router
module.exports = router;