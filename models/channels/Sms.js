const mongoose = require('mongoose');

const SmsSchema = new mongoose.Schema({
    name: 'Sms',
    messages: [
        {  type: mongoose.Schema.Types.ObjectId,
          ref: 'SmsMessage',
        },
    ]
});

const Sms = mongoose.model('Sms', SmsSchema);

module.exports = Sms;