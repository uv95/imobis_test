const Whatsapp = require('../../models/channels/Whatsapp');
const WhatsappMessage = require('../../models/messages/WhatsappMessage');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.createWhatsappMessage = catchAsync(async(req,res,next)=>{
    const newMessage = await WhatsappMessage.create({...req.body, channel: req.params.id})
    
    res.status(201).json({
        status: 'success',
        data: newMessage,
      });
})

exports.deleteWhatsappMessage = factory.deleteOne(WhatsappMessage);
exports.getWhatsappMessage = factory.getOne(WhatsappMessage);
exports.updateWhatsappMessage = factory.updateOne(WhatsappMessage);

