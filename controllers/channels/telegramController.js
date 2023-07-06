const Telegram = require('../../models/channels/Telegram');
const factory = require('../handlerFactory');

exports.createTelegramChannel = factory.createOne(Telegram);
exports.deleteTelegramChannel = factory.deleteOne(Telegram);
exports.getTelegramChannel = factory.getOne(Telegram,'messages');
