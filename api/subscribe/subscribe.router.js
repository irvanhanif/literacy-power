const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const {
    allSubsriber,
    postSubscribe,
    deleteSubscribe
} = require('./subscribe.controller');

router.get('/', tokenValidation, allSubsriber);
router.post('/', postSubscribe);
router.delete('/:id', deleteSubscribe);

module.exports = router;