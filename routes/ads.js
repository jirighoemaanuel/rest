const express = require('express');
const User = require('../models/ads');

const router = express.Router();
const ads = require('../app');

// Getting all
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting one
router.get('/:id', (req, res) => {});

// Creating one
router.post('/', (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    permissionLevel: req.body.permissionLevel,
  });

  try {
    const newUser = user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating one
router.patch('/:id', (req, res) => {});

// Deleting one
router.get('/:id', (req, res) => {});

module.exports = router;
