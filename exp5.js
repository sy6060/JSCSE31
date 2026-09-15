const express = require("express");

const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Aman" },
  { id: 2, name: "Riya" }
];

// GET - Fetch all students
app.get("/students", (req, res) => {
  res.json(students);
});

// POST - Add a new student
app.post("/students", (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

// PUT - Update a student
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(student => student.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  student.name = req.body.name;

  res.json({
    message: "Student updated successfully",
    student: student
  });
});

// DELETE - Delete a student
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  students = students.filter(student => student.id !== id);

  res.json({
    message: "Student deleted successfully"
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});