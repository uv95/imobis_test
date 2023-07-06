const express = require('express');
const telegramController = require('../controllers/channels/telegramController')
const telegramMessagesController = require('../controllers/messages/telegramMessagesController')
const router = express.Router();

router.route('/').post(telegramController.createTelegramChannel);
router.route('/:id').get(telegramController.getTelegramChannel).delete(telegramController.deleteTelegramChannel).post(telegramMessagesController.createTelegramMessage);

router.route('/messages/:id').patch(telegramMessagesController.updateTelegramMessage).delete(telegramMessagesController.deleteTelegramMessage).get(telegramMessagesController.getTelegramMessage)

module.exports = router;
