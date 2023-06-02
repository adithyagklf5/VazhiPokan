const express = require('express');
const router = express.Router();
const { LoginModel } = require("../model/login");

router.post('/', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database by username and password
    const user = await LoginModel.findOne({ username, password });

    if (!user) {
      // User not found or invalid credentials
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Check if the user is an admin
    const isAdmin = user.is_admin;

    // Return the authentication and admin status
    res.json({ isAuthenticated: true, isAdmin });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

module.exports = router;


