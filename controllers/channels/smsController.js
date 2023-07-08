const Sms = require('../../models/channels/Sms');
const SmsMessage = require('../../models/messages/SmsMessage');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.deleteSmsChannel = catchAsync(async(req,res,next)=>{
    await Sms.findByIdAndDelete(req.params.id);
    await  SmsMessage.find({channel: req.params.id}).then(message=>message.forEach(msg=>msg.deleteOne()));
     
     res.status(204).json({
         status: 'success',
         data: null,
       });
})

exports.createSmsChannel = factory.createOne(Sms);
exports.getSmsChannel = factory.getOne(Sms,'messages');
