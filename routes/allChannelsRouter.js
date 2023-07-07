const express = require('express');
const router = express.Router();
const allChannelsController = require('../controllers/channels/allChannelsController')

router.route('/').get(allChannelsController.getMyChannels);

module.exports = router;
