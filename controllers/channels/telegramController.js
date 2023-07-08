const Telegram = require('../../models/channels/Telegram');
const TelegramMessage = require('../../models/messages/TelegramMessage');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.deleteTelegramChannel = catchAsync(async(req,res,next)=>{
    await Telegram.findByIdAndDelete(req.params.id);
    await  TelegramMessage.find({channel: req.params.id}).then(message=>message.forEach(msg=>msg.deleteOne()));
     
     res.status(204).json({
         status: 'success',
         data: null,
       });
 })

exports.createTelegramChannel = factory.createOne(Telegram);
exports.getTelegramChannel = factory.getOne(Telegram,'messages');
