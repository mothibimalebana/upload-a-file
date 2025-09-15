require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoute');
const session = require("express-session");
const passport = require('passport');
const { User } = require('./services/userServices');
const LocalStrategy = require('passport-local').Strategy;


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.json());



passport.use(
  new LocalStrategy(async (email = 'mothibi', password = 'admin', done) => {
    try {
      const query = await User.getUser(email);
      const user =query[0]
      
      console.log(user)
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch(err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.getUserById(id)

    done(null, user);
  } catch(err) {
    done(err);
  }
});


app.post('/login', passport.authenticate('local'));
app.use('/', userRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
