const mongoose = require('mongoose');

const SmsMessageSchema = new mongoose.Schema({
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
    channel:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Sms',
              }
});

const SmsMessage = mongoose.model('SmsMessage', SmsMessageSchema);

module.exports = SmsMessage;