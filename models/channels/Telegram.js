const mongoose = require('mongoose');

const TelegramSchema = new mongoose.Schema({
  name: {type:String, default:'telegram'},
  keyboard : { 
    standard: { 
            maxButtons: {type:Number, default: -1},   
            maxTextLength: {type:Number, default: -1},
            supportsLinks:{type:Boolean, default:false}
            },
    inline: { 
            maxButtons: {type:Number, default: -1},   
            maxTextLength: {type:Number, default: 64},
            supportsLinks: {type:Boolean, default:true}
            }
        },
  createdAt: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps:{
      currentTime: ()=>Date.now()},
  }
  );

TelegramSchema.virtual('messages', {
  ref: 'TelegramMessage',
  foreignField: 'channel',
  localField: '_id',
});

const Telegram = mongoose.model('Telegram', TelegramSchema);

module.exports = Telegram;