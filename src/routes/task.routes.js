const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// CREATE TASK
router.post("/", authMiddleware, async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      user: req.userId
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ALL TASKS
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const tasks = await Task.find({ user: req.userId });
//     res.json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
// GET TASKS (with optional filter)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const filter = { user: req.userId };

    // optional filter by completed status
    if (req.query.completed !== undefined) {
      filter.completed = req.query.completed === "true";
    }

    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE TASK
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE TASK
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
