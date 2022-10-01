const express = require('express');
const router = express.Router();
const Todos = require('../models/todos');

// Getting all
router.get('/', async (req, res) => {
  try {
    const todos = await Todos.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one
router.get('/:id', (req, res) => {});

// Creating one
router.post('/', async (req, res) => {
  const todoItem = new Todos({
    todoTask: req.body.todoTask,
  });
  try {
    const newtodoItem = await todoItem.save();
    res.status(201).json(newtodoItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating one
router.patch('/id', (req, res) => {});

// Deleting one
router.delete('/:id', (req, res) => {});

module.exports = router;
