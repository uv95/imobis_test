const Sms = require('../../models/channels/Sms');
const factory = require('../handlerFactory');

exports.createSmsChannel = factory.createOne(Sms);
exports.deleteSmsChannel = factory.deleteOne(Sms);
exports.getSmsChannel = factory.getOne(Sms);
