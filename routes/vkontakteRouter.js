const express = require('express');
const vkontakteController = require('../controllers/channels/vkontakteController')
const router = express.Router();

router.route('/').post(vkontakteController.createVkontakteChannel);
router.route('/:id').get(vkontakteController.getVkontakteChannel).delete(vkontakteController.deleteVkontakteChannel);

module.exports = router;
