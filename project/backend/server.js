const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcrypt"); // Use bcrypt for password hashing (optional but recommended)

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Adjust based on frontend URL
  credentials: true
}));
app.use(express.json());

// Use sessions
app.use(session({
  secret: "your_secret_key",  // Change this in production
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, httpOnly: true } // Secure: false for local dev
}));

// Connect to MySQL
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "dominators",
}).promise();

// Test DB connection
db.getConnection()
  .then(connection => {
    console.log("MySQL connected successfully!");
    connection.release();
  })
  .catch(err => {
    console.error("MySQL connection error:", err);
  });

// Check if username exists
app.post("/check-username", async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  try {
    const [rows] = await db.query("SELECT COUNT(*) AS count FROM users WHERE username = ?", [username]);

    if (rows[0].count > 0) {
      return res.json({ available: false }); // Username taken
    } else {
      return res.json({ available: true }); // Username available
    }
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Signup API (Password hashing recommended)
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  try {
    const [results] = await db.query("SELECT * FROM users WHERE username = ?", [username]);
    if (results.length > 0) return res.status(400).json({ message: "Username already taken!" });

    // Optional: Hash the password (recommended)
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    const [result] = await db.query(sql, [username, hashedPassword]);

    // Set session after user is created
    req.session.user = { username, id: result.insertId }; // Store user info in session
    res.json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Signup Error:", err);
    return res.status(500).json({ message: "Error registering user", error: err });
  }
});

// Login API (Session-based Authentication)
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [results] = await db.query("SELECT * FROM users WHERE username = ?", [username]);
    if (results.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    const user = results[0];

    // Check password with bcrypt (if you hash the passwords in signup)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    // Set session
    req.session.user = { id: user.id, username: user.username };
    res.json({ message: "Login successful!", username: user.username });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Error logging in", error: err });
  }
});

// API to get session user details
app.get("/user", (req, res) => {
  if (req.session.user) {
    res.json({ username: req.session.user.username });
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
});

// Logout API (Destroy session)
app.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.json({ message: "Logged out successfully" });
  });
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
