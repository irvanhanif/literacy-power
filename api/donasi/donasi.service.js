const db = require('../db/db.config');
const tablename = 'donasi'

module.exports = {
    insertDonasi: (req, cb) => {
        db(`${tablename}`).insert({
            judul: req.judul,
            step: req.step
        }).then(() => {
            return cb(null, "success submit");
        }).catch((error) => {
            return cb(error);
        })
    },
    getAllDonasi: (cb) => {
        db(`${tablename}`).select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    },
    deleteDonasi: (req, cb) => {
        db(`${tablename}`).where(`id_${tablename}`, req.id_donasi)
        .del()
        .then(() => {
            return cb(null, "success delete");
        }).catch((error) => {
            return cb(error);
        })
    }
}