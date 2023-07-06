const mongoose = require('mongoose');

const smsSchema = new mongoose.Schema({
  messages: [
      {
          text: { type: String},
          keyboard : { 
            current: {
                type: String, 
                enum: ['standard', 'inline'], 
                default: 'standard'
            },
            standard: { 
                maxButtons: {type:Number, default: 40},   
                maxTextLength: {type:Number, default: -1},
                supportsLinks:{type:Boolean, default:true}
                },
            inline: { 
                maxButtons: {type:Number, default: 40},   
                maxTextLength: {type:Number, default: -1},
                supportsLinks: {type:Boolean, default:true}
                }
            },
      },
  ]
});

const Sms = mongoose.model('Sms', smsSchema);

module.exports = Sms;