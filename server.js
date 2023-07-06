const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./db');

const app = express();
connectDB();

app.listen(port, console.log(`Server running on ${port}`));
