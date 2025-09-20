require('dotenv').config();
const express = require('express');
const passport = require('passport');
const { User } = require('./services/userServices');
const authRouter = require('./routes/auth');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('@prisma/client');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(
  expressSession({
    cookie: {
     maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: 'a santa at nasa',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      new PrismaClient(),
      {
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true,
        dbRecordIdFunction: undefined,
      }
    )
  })
);
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
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
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
