const Telegram = require('../../models/channels/Telegram');
const Sms = require('../../models/channels/Sms');
const Vkontakte = require('../../models/channels/Vkontakte');
const Whatsapp = require('../../models/channels/Whatsapp');
const catchAsync = require('../../utils/catchAsync');

exports.getMyChannels = catchAsync(async (req, res, next) => {
  const telegram = await Telegram.find().populate('messages');
  const sms = await Sms.find().populate('messages');
  const vk = await Vkontakte.find().populate('messages');
  const whatsapp = await Whatsapp.find().populate('messages');

  const myChannels = [...telegram,...sms,...vk,...whatsapp].filter(item=>item)
  .sort((a,b)=>a.createdAt-b.createdAt)

  res.status(200).json({
    status: 'success',
    data: myChannels
  });
});