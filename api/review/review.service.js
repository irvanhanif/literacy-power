const db = require('../db/db.config');

module.exports = {
    insertReview: (req, cb) => {
        db('review').insert({
            note: req.note,
            name: req.name,
            university: req.university
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
    getAllReview: (cb) => {
        db('review').select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    }
}