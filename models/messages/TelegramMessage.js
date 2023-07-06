const mongoose = require('mongoose');

const TelegramMessageSchema = new mongoose.Schema({
   text: { type: String, maxlength: [4096, 'Текст должен быть не длиннее 4096 символов!']},
    keyboard : { 
        current: {
                type: String, 
                enum: ['standard', 'inline'], 
                default: 'standard'
            },
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
    channel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Telegram',
      }
  
});

const TelegramMessage = mongoose.model('TelegramMessage', TelegramMessageSchema);

module.exports = TelegramMessage;