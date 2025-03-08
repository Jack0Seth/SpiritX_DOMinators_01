const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dominators",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database!");
  }
});

// Signup API
app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: "User registered successfully!" });
  });
});

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      res.send({ message: "Login successful!" });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  });
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
