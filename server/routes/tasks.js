const express = require("express");
const router = express.Router();
const { tasks } = require("../data/tasks");

// Get all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// Add a task
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });
  const newTask = { id: tasks.length + 1, title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Mark task as complete
router.put("/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  task.completed = true;
  res.json(task);
});

// Delete all tasks
router.delete("/", (req, res) => {
  tasks.length = 0;
  res.json({ message: "All tasks deleted" });
});

module.exports = router;