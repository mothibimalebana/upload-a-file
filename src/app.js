require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoute');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user', userRoutes);

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
