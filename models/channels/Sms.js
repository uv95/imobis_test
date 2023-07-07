const mongoose = require('mongoose');

const SmsSchema = new mongoose.Schema({
    name: {type:String, default:'sms'},
    createdAt: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps:{
      currentTime: ()=>Date.now()},
  }
  );
  
  SmsSchema.virtual('messages', {
    ref: 'SmsMessage',
    foreignField: 'channel',
    localField: '_id',
  });

const Sms = mongoose.model('Sms', SmsSchema);

module.exports = Sms;