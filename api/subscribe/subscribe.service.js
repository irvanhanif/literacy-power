const db = require('../db/db.config');
const tablename = 'subscribe'

module.exports = {
    insertSubscribe: (req, cb) => {
        db(`${tablename}`).insert({
            email: req.email
        }).then(() => {
            return cb(null, "success submit");
        }).catch((error) => {
            return cb(error);
        })
    },
    deleteSubscribe: (req, cb) => {
        db(`${tablename}`).where(`id_${tablename}`, req.id_subscribe)
        .del()
        .then((result) => {
            return cb(null, "success delete");
        }).catch((error) => {
            return cb(error);
        })
    },
    getAllSubscriber: (cb) => {
        db(`${tablename}`).select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    }
}