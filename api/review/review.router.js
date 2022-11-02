const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const {
    postReview,
    deleteReview,
    allReview,
    updateReview,
    detailReview
} = require('./review.controller');

router.get('/', allReview);
router.post('/', postReview);
router.get('/:id', detailReview);
router.put('/:id', tokenValidation, updateReview);
router.delete('/:id', tokenValidation, deleteReview);

module.exports = router;