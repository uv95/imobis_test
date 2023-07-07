const mongoose = require('mongoose');

const WhatsappSchema = new mongoose.Schema({
    name: {type:String, default:'whatsapp'},
    createdAt: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps:{
      currentTime: ()=>Date.now()},
  }
  );

WhatsappSchema.virtual('messages', {
  ref: 'WhatsappMessage',
  foreignField: 'channel',
  localField: '_id',
});

const Whatsapp = mongoose.model('Whatsapp', WhatsappSchema);

module.exports = Whatsapp;