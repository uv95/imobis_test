const mongoose = require('mongoose');

const WhatsappSchema = new mongoose.Schema({
    name: {type:String, default:'Whatsapp'},
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

WhatsappSchema.virtual('messages', {
  ref: 'WhatsappMessage',
  foreignField: 'channel',
  localField: '_id',
});

const Whatsapp = mongoose.model('Whatsapp', WhatsappSchema);

module.exports = Whatsapp;