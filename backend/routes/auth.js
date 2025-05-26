const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({ error: 'Missing username or password' });

    let existingUser = await User.findOne({ username });
    if(existingUser) return res.status(400).json({ error: 'Username already taken' });

    const newUser = new User({ username });
    await newUser.setPassword(password);
    await newUser.save();

    res.json({ message: 'User registered successfully' });
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if(!username || !password) return res.status(400).json({ error: 'Missing username or password' });

    const user = await User.findOne({ username });
    if(!user) return res.status(400).json({ error: 'Invalid username or password' });

    const valid = await user.validatePassword(password);
    if(!valid) return res.status(400).json({ error: 'Invalid username or password' });

    res.json({ 
      message: 'Login successful',
      user: { id: user._id, username: user.username }
    });
  } catch (e) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
