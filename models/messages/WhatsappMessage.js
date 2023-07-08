const mongoose = require('mongoose');

const WhatsappMessageSchema = new mongoose.Schema({
  text: { 
      type: String, 
      required:[true, "Текст не должен быть пустым!"], 
      maxlength: [1000, 'Текст должен быть не длиннее 1000 символов!']
    },
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
     buttons: [{
              text: {type:String, required:[true, "Текст кнопки не должен быть пустым!"]},
              isLink: {type: Boolean, default: false}
      }], 
    channel:{
         type: mongoose.Schema.Types.ObjectId,
        ref: 'Whatsapp',
              }
});

const WhatsappMessage = mongoose.model('WhatsappMessage', WhatsappMessageSchema);

module.exports = WhatsappMessage;