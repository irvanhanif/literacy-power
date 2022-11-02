const db = require('../db/db.config');

module.exports = {
    insertReview: (req, cb) => {
        db('review').insert({
            username: req.username,
            userProfession: req.userProfession,
            testimoni: req.testimoni
        }).then(() => {
            return cb(null, "success submit");
        }).catch((error) => {
            return cb(error);
        })
    },
    updateReview: (req, cb) => {
        db('review').where('id_review', req.id_review)
        .update({
            username: req.username,
            userProfession: req.userProfession,
            testimoni: req.testimoni
        }).then(() => {
            return cb(null, "success submit");
        }).catch((error) => {
            return cb(error);
        })
    },
    deleteReview: (req, cb) => {
        db('review').where('id_review', req.id_review)
        .del()
        .then((result) => {
            return cb(null, "success delete");
        }).catch((error) => {
            return cb(error);
        })
    },
    getReview: (req, cb) => {
        db('review').where('id_review', req.id_review)
        .select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    },
    getAllReview: (cb) => {
        db('review').select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    }
}