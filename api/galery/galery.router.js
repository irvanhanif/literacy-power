const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const {
    postPhoto,
    allPhoto,
    deletePhoto,
    getPhoto,
    searchPhoto
} = require('./galery.controller');
const upload = require('../storage/multer');

router.get('/', allPhoto);
router.get('/:id', tokenValidation, getPhoto);
router.get('/search/:nama', searchPhoto);
router.post('/', tokenValidation, upload, postPhoto);
router.delete('/:id', tokenValidation, deletePhoto);

module.exports = router;