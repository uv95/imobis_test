const Whatsapp = require('../../models/channels/Whatsapp');
const factory = require('../handlerFactory');

exports.createWhatsappChannel = factory.createOne(Whatsapp);
exports.deleteWhatsappChannel = factory.deleteOne(Whatsapp);
exports.getWhatsappChannel = factory.getOne(Whatsapp);
