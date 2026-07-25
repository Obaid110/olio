const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", {
        title: "My Website",
        name: "Obaid"
    });
});

app.listen(3000, () => {
    console.log("Server running http://localhost:3000");
});