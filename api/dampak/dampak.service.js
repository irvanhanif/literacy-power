const db = require('../db/db.config');

module.exports = {
    insertDampak: (req, cb) => {
        db('dampak').insert({
            deskripsi: req.deskripsi,
            link_foto: req.link
        }).then(() => {
            return cb(null, "success submit");
        }).catch((error) => {
            return cb(error);
        })
    },
    deleteDampak: (req, cb) => {
        db('dampak').where('id_dampak', req.id_dampak)
        .del()
        .then((result) => {
            return cb(null, "success delete");
        }).catch((error) => {
            return cb(error);
        })
    },
    getAllDampak: (cb) => {
        db('dampak').select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    }
}