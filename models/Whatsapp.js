const mongoose = require('mongoose');

const whatsappSchema = new mongoose.Schema({
  messages: [
      {
          text: { type: String, maxlength: [1000, 'Текст должен быть не длиннее 1000 символов!']},
          keyboard : { 
            current: {
                type: String, 
                enum: ['standard', 'inline'], 
                default: 'standard'
            },
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
      },
  ]
});

const Whatsapp = mongoose.model('Whatsapp', whatsappSchema);

module.exports = Whatsapp;