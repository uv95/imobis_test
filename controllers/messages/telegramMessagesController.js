const TelegramMessage = require('../../models/messages/TelegramMessage');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.createTelegramMessage = catchAsync(async(req,res,next)=>{
    const newMessage = await TelegramMessage.create({...req.body, channel: req.params.id})
    
    res.status(201).json({
        status: 'success',
        data: newMessage,
      });
})

exports.deleteTelegramMessage = factory.deleteOne(TelegramMessage);
exports.getTelegramMessage = factory.getOne(TelegramMessage);
exports.updateTelegramMessage = factory.updateOne(TelegramMessage);
