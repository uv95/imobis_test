const express = require('express');
const whatsappController = require('../controllers/channels/whatsappController')
const router = express.Router();

router.route('/').post(whatsappController.createWhatsappChannel);
router.route('/:id').get(whatsappController.getWhatsappChannel).delete(whatsappController.deleteWhatsappChannel);

module.exports = router;
