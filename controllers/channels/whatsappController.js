const Whatsapp = require('../../models/channels/Whatsapp');
const WhatsappMessage = require('../../models/messages/WhatsappMessage');
const catchAsync = require('../../utils/catchAsync');
const factory = require('../handlerFactory');

exports.deleteWhatsappChannel = catchAsync(async(req,res,next)=>{
   await Whatsapp.findByIdAndDelete(req.params.id);
   await  WhatsappMessage.find({channel: req.params.id}).then(message=>message.forEach(msg=>msg.deleteOne()));
    
    res.status(204).json({
        status: 'success',
        data: null,
      });
})

exports.createWhatsappChannel = factory.createOne(Whatsapp);
exports.getWhatsappChannel = factory.getOne(Whatsapp, 'messages');
