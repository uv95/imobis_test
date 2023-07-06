const express = require('express');
const telegramController = require('../controllers/channels/telegramController')
const router = express.Router();

router.route('/').post(telegramController.createTelegramChannel);
router.route('/:id').get(telegramController.getTelegramChannel).delete(telegramController.deleteTelegramChannel);

module.exports = router;
