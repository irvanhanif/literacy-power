const db = require('../db/db.config');

module.exports = {
    insertPhoto: (req, cb) => {
        db('galery').insert({
            nama: req.nama,
            public_id: req.public_id,
            link: req.link,
            show_on_home: req.show_on_home
        })
        .returning('*')
        .then((data) => {
            return cb(null, data);
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