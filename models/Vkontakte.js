const mongoose = require('mongoose');

const vkontakteSchema = new mongoose.Schema({
  messages: [
      {
          text: { type: String, maxlength: [4096, 'Текст должен быть не длиннее 4096 символов!']},
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
                maxButtons: {type:Number, default: 10},   
                maxTextLength: {type:Number, default: -1},
                supportsLinks: {type:Boolean, default:true}
                }
            },
      },
  ]
});

const Vkontakte = mongoose.model('Vkontakte', vkontakteSchema);

module.exports = Vkontakte;