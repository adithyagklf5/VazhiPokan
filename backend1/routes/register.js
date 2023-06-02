const express = require('express');
const router = express.Router();
const { LoginModel } = require("../model/login")

router.post('/', async (req, res) => {
  const { username, password, is_admin } = req.body;

  try {
    // Create a new instance of the LoginModel
    const newUser = new LoginModel({
      username,
      password,
      is_admin,
    });

    // Save the new user to the database using await
    await newUser.save();

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'An error occurred while saving the user' });
  }
});


module.exports = router;
