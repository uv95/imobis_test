const mongoose = require('mongoose');

const WhatsappMessageSchema = new mongoose.Schema({
 title: {type: String, default: "Новый шаблон"},
  text: { 
      type: String, 
      required:[true, "Текст не должен быть пустым!"], 
      maxlength: [1000, 'Текст должен быть не длиннее 1000 символов!']
    },
  keyboard : { 
            type: String, 
            enum: ['standard', 'inline'], 
            default: 'standard'
            },
     buttons: [{
              text: {type:String, required:[true, "Текст кнопки не должен быть пустым!"]},
              isLink: {type: Boolean, default: false},
              link: {type:String}
      }], 
    channel:{
         type: mongoose.Schema.Types.ObjectId,
        ref: 'Whatsapp',
              }
});

const WhatsappMessage = mongoose.model('WhatsappMessage', WhatsappMessageSchema);

module.exports = WhatsappMessage;