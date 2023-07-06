const express = require('express');
const smsController = require('../controllers/channels/smsController')
const router = express.Router();

router.route('/').post(smsController.createSmsChannel);
router.route('/:id').get(smsController.getSmsChannel).delete(smsController.deleteSmsChannel);

module.exports = router;
