const mongoose = require('mongoose');

const VkontakteSchema = new mongoose.Schema({
    name: 'Vkontakte',
    messages: [
        {  type: mongoose.Schema.Types.ObjectId,
          ref: 'VkontakteMessage',
        },
    ]
});

const Vkontakte = mongoose.model('Vkontakte', VkontakteSchema);

module.exports = Vkontakte;