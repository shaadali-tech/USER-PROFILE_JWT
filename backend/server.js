const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(cors());
// Connect to MongoDB
connectDB();

const port = Number.parseInt(process.env.PORT, 10) || 5000;

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

/* "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMmQ5OTM0NDVjNDkwMTA3NTQ2OTgxNiIsImlhdCI6MTc4MTQwODQ2NiwiZXhwIjoxNzgxNDk0ODY2fQ.0cXCAVbJYKyYipceIvHoEdujyiRK5Xi02ANsrK3ldeg"*/
app.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile Access Granted",

    user: req.user,
  });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
