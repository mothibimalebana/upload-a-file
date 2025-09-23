require('dotenv').config();
const express = require('express');
const passport = require('passport');
const authRouter = require('./routes/auth');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const expressSession = require('express-session');
const { PrismaSessionStore } = require('@quixo3/prisma-session-store');
const { PrismaClient } = require('../generated/prisma/client');
const homeRouter = require('./routes/homeRouter');
const cors = require('cors');
const userRouter = require('./routes/userRoute');
const { getUser } = require('./services/userServices');
const prisma = new PrismaClient();


const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
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
    const user = await getUser(id)

    done(null, user);
  } catch(err) {
    done(err);
  }
});

app.use('/user', userRouter)
app.use('/', authRouter);

const getUsers = async () => {
const users = await prisma.user.findMany();
console.log(users)
}
getUsers()

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
