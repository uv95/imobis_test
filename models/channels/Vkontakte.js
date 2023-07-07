const mongoose = require('mongoose');

const VkontakteSchema = new mongoose.Schema({
    name: {type:String, default:'vkontakte'},
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

VkontakteSchema.virtual('messages', {
  ref: 'VkontakteMessage',
  foreignField: 'channel',
  localField: '_id',
});

const Vkontakte = mongoose.model('Vkontakte', VkontakteSchema);

module.exports = Vkontakte;