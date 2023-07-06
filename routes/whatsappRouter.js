const express = require('express');
const whatsappController = require('../controllers/channels/whatsappController')
const whatsappMessagesController = require('../controllers/messages/whatsappMessagesController')
const router = express.Router();

router.route('/').post(whatsappController.createWhatsappChannel);
router.route('/:id').get(whatsappController.getWhatsappChannel).delete(whatsappController.deleteWhatsappChannel).post(whatsappMessagesController.createWhatsappMessage);

router.route('/messages/:id').patch(whatsappMessagesController.updateWhatsappMessage).delete(whatsappMessagesController.deleteWhatsappMessage).get(whatsappMessagesController.getWhatsappMessage)

module.exports = router;
