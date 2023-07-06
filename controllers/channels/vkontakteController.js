const Vkontakte = require('../../models/channels/Vkontakte');
const factory = require('../handlerFactory');

exports.createVkontakteChannel = factory.createOne(Vkontakte);
exports.deleteVkontakteChannel = factory.deleteOne(Vkontakte);
exports.getVkontakteChannel = factory.getOne(Vkontakte);