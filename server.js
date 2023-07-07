const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./db');

const vkontakteRouter = require('./routes/vkontakteRouter');
const smsRouter = require('./routes/smsRouter');
const whatsappRouter = require('./routes/whatsappRouter');
const telegramRouter = require('./routes/telegramRouter');
const allChannelsRouter = require('./routes/allChannelsRouter');
const AppError = require('./utils/appError');

const app = express();
app.use(cors());
connectDB();
app.use(express.json());


app.use('/vkontakte', vkontakteRouter);
app.use('/sms', smsRouter);
app.use('/whatsapp', whatsappRouter);
app.use('/telegram', telegramRouter);
app.use('/channels', allChannelsRouter);

app.all('*', (req, res, next) => {
    next(new AppError('Страница не найдена', 404));
  });

app.listen(port, console.log(`Server running on ${port}`));
