const express = require('express');
const vkontakteController = require('../controllers/channels/vkontakteController')
const vkontakteMessagesController = require('../controllers/messages/vkontakteMessagesController')
const router = express.Router();

router.route('/').post(vkontakteController.createVkontakteChannel);
router.route('/:id').get(vkontakteController.getVkontakteChannel).delete(vkontakteController.deleteVkontakteChannel).post(vkontakteMessagesController.createVkontakteMessage);

router.route('/messages/:id').patch(vkontakteMessagesController.updateVkontakteMessage).delete(vkontakteMessagesController.deleteVkontakteMessage).get(vkontakteMessagesController.getVkontakteMessage)

module.exports = router;
