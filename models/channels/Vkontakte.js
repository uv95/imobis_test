const mongoose = require('mongoose');

const VkontakteSchema = new mongoose.Schema({
    name: {type:String, default:'vkontakte'},
    keyboard : { 
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