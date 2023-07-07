const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./db');

const vkontakteRouter = require('./routes/vkontakteRouter');
const smsRouter = require('./routes/smsRouter');
const whatsappRouter = require('./routes/whatsappRouter');
const telegramRouter = require('./routes/telegramRouter');
const AppError = require('./utils/appError');

const app = express();
connectDB();
app.use(express.json());


app.use('/vk', vkontakteRouter);
app.use('/sms', smsRouter);
app.use('/whatsapp', whatsappRouter);
app.use('/tg', telegramRouter);

app.all('*', (req, res, next) => {
    next(new AppError('Страница не найдена', 404));
  });

app.listen(port, console.log(`Server running on ${port}`));
