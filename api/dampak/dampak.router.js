const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const {
    postDampak,
    deleteDampak,
    allDampak
} = require('./review.controller');

router.get('/', allDampak);
router.post('/', tokenValidation, postDampak);
router.delete('/:id', tokenValidation, deleteDampak)

module.exports = router;