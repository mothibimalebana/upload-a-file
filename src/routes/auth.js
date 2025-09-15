const express = require('express');
const passport = require('passport');
const { createUser } = require('../controllers/userController');

const authRouter = express.Router();

authRouter.post('/sign-up', createUser);

// Login route
authRouter.post('/login', passport.authenticate('local'), (req, res) => {
  if(req.user){
    res.json({ user: req.user });
  } else{
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Logout route
authRouter.get('/log-out', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.json({ message: 'Logged out' });
  });
});

// Protected profile route
authRouter.get('/profile', (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  res.json({ user: req.user });
});

module.exports = authRouter;