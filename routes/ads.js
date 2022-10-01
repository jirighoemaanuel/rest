const express = require('express');
const User = require('../models/ads');

const router = express.Router();
// const ads = require('../app');

// Getting all
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // Getting one
router.get('/:id', getUser, (req, res) => {
  res.send(res.user);
});

// Creating one
router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    permissionLevel: req.body.permissionLevel,
  });
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// // Updating one
router.patch('/:id', getUser, async (req, res) => {
  if (req.body.password != null) {
    res.user.password = req.body.password;
  }

  try {
    const updatedUserPassword = await res.user.save();
    res.json(updatedUserPassword);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// // Deleting one
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'Deleted User' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find subscriber' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.user = user;
  next();
}

module.exports = router;
