// routes/todoRoutes.js
const express = require('express');
const Todo = require('../models/Todo');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// Get user-specific todos
router.get('/', auth, async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.userId });
    res.json(todos);
  } catch (err) {
    console.error("❌ Error fetching todos:", err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a todo
router.post('/', auth, async (req, res) => {
  try {
    console.log("🔔 POST /api/todos triggered");
    console.log("Creating todo with:", req.body, req.userId); // 👀 log everything

    const newTodo = new Todo({
      text: req.body.text,
      completed: false,
      userId: req.userId
    });

    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    console.error("❌ Error creating todo:", err);
    res.status(500).json({ error: 'Error creating todo' });
  }
});

// Delete a todo
router.delete('/:id', auth, async (req, res) => {
  try {
    await Todo.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error("❌ Error deleting todo:", err);
    res.status(500).json({ error: 'Error deleting todo' });
  }
});

module.exports = router;
