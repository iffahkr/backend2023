// import express
const express = require("express");

// membuat object express
const app = express();

/**
 * Membuat routing
 * Method get menerima 2 params
 * Param 1 adalah endpoint
 * Param 2 callback
 * Callback menerima object req dan res
 */

app.get("/", (req, res) => {
    res.send("Hello Express");
});
   
// mendefinisikan port
app.listen(8000);