const mongoose = require('mongoose');

const WhatsappSchema = new mongoose.Schema({
    name: {type:String, default:'whatsapp'},
    keyboard : { 
      standard: { 
              maxButtons: {type:Number, default: 40},   
              maxTextLength: {type:Number, default: 20},
              supportsLinks:{type:Boolean, default:false}
                  },
      inline: { 
               maxButtons: {type:Number, default: 3},   
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

WhatsappSchema.virtual('messages', {
  ref: 'WhatsappMessage',
  foreignField: 'channel',
  localField: '_id',
});

const Whatsapp = mongoose.model('Whatsapp', WhatsappSchema);

module.exports = Whatsapp;