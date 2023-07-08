const mongoose = require('mongoose');

const SmsMessageSchema = new mongoose.Schema({
 title: {type: String, default: "Новый шаблон"},
text: { 
        type: String,
        required:[true, "Текст не должен быть пустым!"], 
},         
channel:{
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Sms',
              }
});

const SmsMessage = mongoose.model('SmsMessage', SmsMessageSchema);

module.exports = SmsMessage;