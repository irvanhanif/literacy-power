const db = require('../db/db.config');

module.exports = {
    insertPhoto: (req, cb) => {
        db('galery').insert({
            nama: req.nama,
            link: req.link  
        }).then(() => {
            return cb(null, "success submit");
        }).catch((error) => {
            return cb(error);
        })
    },
    deletePhoto: (req, cb) => {
        db('galery').where('id_galery', req.id_galery)
        .del()
        .then((result) => {
            return cb(null, "success delete");
        }).catch((error) => {
            return cb(error);
        })
    },
    getAllPhoto: (cb) => {
        db('galery').select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    },
    detailPhoto: (req, cb) => {
        db('galery').select().where('id_galery', req.id_galery)
        .then((result) => {            
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    }
}