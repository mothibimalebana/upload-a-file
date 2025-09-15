const express = require('express');
const passport = require('passport');

const authRouter = express.Router();


// Login route
authRouter.post('/', passport.authenticate('local'));

// Logout route
authRouter.get('/', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Protected profile route
authRouter.get('/', (req, res) => {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  res.json({ user: req.user });
});

module.exports = authRouter;