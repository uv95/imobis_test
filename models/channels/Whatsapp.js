const mongoose = require('mongoose');

const WhatsappSchema = new mongoose.Schema({
    name: 'Whatsapp',
    messages: [
        {  type: mongoose.Schema.Types.ObjectId,
          ref: 'WhatsappMessage',
        },
    ]
});

const Whatsapp = mongoose.model('Whatsapp', WhatsappSchema);

module.exports = Whatsapp;