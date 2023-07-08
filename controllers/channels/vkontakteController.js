const Vkontakte = require('../../models/channels/Vkontakte');
const VkontakteMessage = require('../../models/messages/VkontakteMessage');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.deleteVkontakteChannel = catchAsync(async(req,res,next)=>{
    await Vkontakte.findByIdAndDelete(req.params.id);
    await  VkontakteMessage.find({channel: req.params.id}).then(message=>message.forEach(msg=>msg.deleteOne()));
     
     res.status(204).json({
         status: 'success',
         data: null,
       });
 })

exports.createVkontakteChannel = factory.createOne(Vkontakte);
exports.getVkontakteChannel = factory.getOne(Vkontakte,'messages');