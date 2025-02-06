const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set view engine ke EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk menyajikan file statis
app.use(express.static(path.join(__dirname, "public")));

// Set view engine ke EJS
app.set("view engine", "ejs");

// Rute halaman utama
app.get("/", (req, res) => {
    res.render("index");
});

// Rute halaman login
app.get("/login", (req, res) => {
    res.render("login");
});

// Rute halaman register
app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/service", (req, res) => {
    res.render("service");
});

app.get("/about", (req, res) => {
    res.render("about");
});


// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
