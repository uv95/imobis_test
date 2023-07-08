const mongoose = require('mongoose');

const TelegramMessageSchema = new mongoose.Schema({
 title: {type: String, default: "Новый шаблон"},
 text: { 
       type: String, 
       required:[true, "Текст не должен быть пустым!"], 
       maxlength: [4096, 'Текст должен быть не длиннее 4096 символов!']},
  keyboard: {
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
        ref: 'Telegram',
      }
  
});

const TelegramMessage = mongoose.model('TelegramMessage', TelegramMessageSchema);

module.exports = TelegramMessage;