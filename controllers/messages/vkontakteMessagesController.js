const VkontakteMessage = require('../../models/messages/VkontakteMessage');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.createVkontakteMessage = catchAsync(async(req,res,next)=>{
    const newMessage = await VkontakteMessage.create({...req.body, channel: req.params.id})
    
    res.status(201).json({
        status: 'success',
        data: newMessage,
      });
})

exports.deleteVkontakteMessage = factory.deleteOne(VkontakteMessage);
exports.getVkontakteMessage = factory.getOne(VkontakteMessage);
exports.updateVkontakteMessage = factory.updateOne(VkontakteMessage);
