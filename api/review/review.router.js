const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const {
    postReview,
    deleteReview,
    allReview
} = require('./review.controller');

router.get('/', allReview);
router.post('/', postReview);
router.delete('/:id', tokenValidation, deleteReview)

module.exports = router;