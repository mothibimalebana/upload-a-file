require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoute');
const fileRouter = require('./routes/fileRoute');
const { User } = require('./services/userServices');
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken') //for creating tokens
const passport = require('passport')
const passportJWT = require('passport-jwt') //for verifying tokens
const cors = require('cors')

const app = express();
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

passport.use(strategy)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/:userId/files',fileRouter )
app.use('/user', userRoutes);

// Middleware setup
app.use(cors());
app.use(passport.initialize());

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

//verification of token
const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  const user = User.getAllUser.find((user) => user.id === jwt_payload.id);
  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

