const mongoose = require('mongoose');

const TelegramSchema = new mongoose.Schema({
  name: {type:String, default:'Telegram'},
  messages: [
      {  type: mongoose.Schema.Types.ObjectId,
        ref: 'TelegramMessage',
      },
  ]
});

const Telegram = mongoose.model('Telegram', TelegramSchema);

module.exports = Telegram;