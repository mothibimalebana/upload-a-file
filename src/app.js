require('dotenv').config();
const express = require('express');
const userRoutes = require('./routes/userRoute');
const fileRouter = require('./routes/fileRoute');
const multer = require('multer');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/files',fileRouter )



const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

