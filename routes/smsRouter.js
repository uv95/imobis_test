const express = require('express');
const smsController = require('../controllers/channels/smsController')
const smsMessagesController = require('../controllers/messages/smsMessagesController')
const router = express.Router();

router.route('/').post(smsController.createSmsChannel);
router.route('/:id').get(smsController.getSmsChannel).delete(smsController.deleteSmsChannel).post(smsMessagesController.createSmsMessage);

router.route('/messages/:id').patch(smsMessagesController.updateSmsMessage).delete(smsMessagesController.deleteSmsMessage).get(smsMessagesController.getSmsMessage)


module.exports = router;
