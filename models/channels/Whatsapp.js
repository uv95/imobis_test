const mongoose = require('mongoose');

const WhatsappSchema = new mongoose.Schema({
    name: {type:String, default:'Whatsapp'},
    messages: [
        {  type: mongoose.Schema.Types.ObjectId,
          ref: 'WhatsappMessage',
        },
    ]
});

const Whatsapp = mongoose.model('Whatsapp', WhatsappSchema);

module.exports = Whatsapp;