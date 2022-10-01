const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const {
    postPhoto,
    allPhoto,
    deletePhoto,
    getPhoto
} = require('./galery.controller');
const upload = require('../storage/multer');

router.get('/', allPhoto);
router.get('/:id', tokenValidation, getPhoto);
router.post('/', tokenValidation,upload, postPhoto);
router.delete('/:id', tokenValidation, deletePhoto);

module.exports = router;