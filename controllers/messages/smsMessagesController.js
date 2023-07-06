const SmsMessage = require('../../models/messages/SmsMessage');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.createSmsMessage = catchAsync(async(req,res,next)=>{
    const newMessage = await SmsMessage.create({...req.body, channel: req.params.id})
    
    res.status(201).json({
        status: 'success',
        data: newMessage,
      });
})

exports.deleteSmsMessage = factory.deleteOne(SmsMessage);
exports.getSmsMessage = factory.getOne(SmsMessage);
exports.updateSmsMessage = factory.updateOne(SmsMessage);
