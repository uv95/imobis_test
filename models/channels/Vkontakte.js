const mongoose = require('mongoose');

const VkontakteSchema = new mongoose.Schema({
    name: {type:String, default:'vkontakte'},
    createdAt: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps:{
      currentTime: ()=>Date.now()},
  }
  );

VkontakteSchema.virtual('messages', {
  ref: 'VkontakteMessage',
  foreignField: 'channel',
  localField: '_id',
});

const Vkontakte = mongoose.model('Vkontakte', VkontakteSchema);

module.exports = Vkontakte;