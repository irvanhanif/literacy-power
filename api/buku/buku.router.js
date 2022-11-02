const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const {
    postBuku,
    deleteBuku,
    allBuku,
    updateBuku,
    detailBuku
} = require('./buku.controller');

router.get('/', allBuku);
router.post('/', tokenValidation, postBuku);
router.get('/:id', detailBuku)
router.put('/:id', tokenValidation, updateBuku);
router.delete('/:id', tokenValidation, deleteBuku);

module.exports = router;