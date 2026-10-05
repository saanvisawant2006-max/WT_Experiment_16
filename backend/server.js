const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/student", (req, res) => {
  res.json({
    name: "Saanvi",
    course: "Computer Engineering"
  });
});

app.post("/api/student", (req, res) => {
  res.json({
    message: "Student data received",
    data: req.body
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});