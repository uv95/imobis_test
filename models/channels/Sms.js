const mongoose = require('mongoose');

const SmsSchema = new mongoose.Schema({
    name: {type:String, default:'sms'},
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  });
  
  SmsSchema.virtual('messages', {
    ref: 'SmsMessage',
    foreignField: 'channel',
    localField: '_id',
  });

const Sms = mongoose.model('Sms', SmsSchema);

module.exports = Sms;