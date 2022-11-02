const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const {
    allDonasi,
    postDonasi
} = require('./donasi.controller');

router.get('/', allDonasi);
router.post('/', postDonasi);

module.exports = router;