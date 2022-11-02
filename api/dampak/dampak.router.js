const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const {
    postDampak,
    deleteDampak,
    allDampak,
    detailDampak,
    updateDampak
} = require('./dampak.controller');

router.get('/', allDampak);
router.post('/', tokenValidation, postDampak);
router.get('/:id', detailDampak);
router.put('/:id', tokenValidation, updateDampak);
router.delete('/:id', tokenValidation, deleteDampak);

module.exports = router;