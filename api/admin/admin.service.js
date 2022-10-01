const db = require('../db/db.config');

module.exports = {
    getAdminByUsername: (req, cb) => {
        db('admin').select('*').where({firstName: req.firstName, lastName: req.lastName})
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    },
    insertAdmin: (req, cb) => {
        db('admin').insert({
            firstName: req.firstName,
            lastName: req.lastName,
            password: req.password
        })
        .returning('id_admin')
        .then((result) => {
            db('admin').select('*')
            .where('id_admin', result[0].id_admin)
            .then((result) => {
                delete result[0].password;
                return cb(null, result)
            }).catch((error) => {
                return cb(error);
            })
        }).catch((error) => {
            return cb(error);
        })
    },
    updateAdmin: (req, cb) => {
        db('admin').where('id_admin', req.id_admin)
        .update({
            firstName: req.firstName,
            lastName: req.lastName
        }).then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    },
    deleteAdmin: (req, cb) => {
        db('admin').where('id_admin', req.id_admin)
        .del()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    },
    getAllAdmin: (cb) => {
        db('admin').select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    },
    checkExistAdmin: (req, cb) => {
        db('admin')
        .select()
        .where(db.raw(`CONCAT(CONCAT("firstName", ' '), "lastName")`), req.username)
        .count()
        .then((result) => {
            return cb(null, result[0].count);
        }).catch((error) => {
            return cb(error);
        })
    }
}