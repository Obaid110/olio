const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home Page",
        name: "Obaid"
    });
});

const googleUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    "client_id=999929697270-pq1opg2nuiur68on3ecc1icn7danvmgc.apps.googleusercontent.com&" +
    "redirect_uri=https://olio.my/&" +
    "response_type=code&" +
    "scope=email%20profile";

app.get("/login", (req, res) => {
    res.redirect(googleUrl);
});

module.exports = app;