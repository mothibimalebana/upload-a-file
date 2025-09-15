require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoute');
const session = require("express-session");
const passport = require('passport');
const { getUser } = require('./controllers/userController');
const { User } = require('./services/userServices');
const authRouter = require('./routes/auth');
const LocalStrategy = require('passport-local').Strategy;


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());

passport.use(
  new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
    try {
      const user = await User.getUser(email);
      console.log('user-local-strategy: ', user)
      
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      }
      if (password !== user.password) {
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

app.use('/', authRouter);

User.getAllUsers().then(users => console.log('users: ', users));

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
