require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoute');
const { PrismaClient } = require('../generated/prisma');
const { passportJs } = require('../config/passport');
const session = require("express-session");

const app = express();
const prisma = new PrismaClient

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passportJs.session());



app.use('/', userRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

