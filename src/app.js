require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoute');
const fileRouter = require('./routes/fileRoute');
const multer = require('multer');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/:userId/files',fileRouter )
app.use('/:userId', userRoutes);


const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

