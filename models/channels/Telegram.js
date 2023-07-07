const mongoose = require('mongoose');

const TelegramSchema = new mongoose.Schema({
  name: {type:String, default:'telegram'},
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

TelegramSchema.virtual('messages', {
  ref: 'TelegramMessage',
  foreignField: 'channel',
  localField: '_id',
});

const Telegram = mongoose.model('Telegram', TelegramSchema);

module.exports = Telegram;