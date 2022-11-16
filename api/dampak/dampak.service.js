const db = require('../db/db.config');
const tablename = 'proyek'

module.exports = {
    insertDampak: (req, cb) => {
        db(`${tablename}`).insert({
            thumbnail: req.thumbnail,
            nama: req.nama,
            lokasi: req.lokasi,
            tanggal: req.tanggal,
            content: req.content,
            dampak_sebelum: req.dampak_sebelum,
            dampak_sesudah: req.dampak_sesudah,
            dokumentasi: req.dokumentasi
        }).then(() => {
            return cb(null, "success submit");
        }).catch((error) => {
            return cb(error);
        })
    },
    updateDampak: (req, cb) => {
        db(`${tablename}`).where('id_proyek', req.id_proyek)
        .update({
            thumbnail: req.thumbnail,
            nama: req.nama,
            lokasi: req.lokasi,
            tanggal: req.tanggal,
            content: req.content,
            dampak_sebelum: req.dampak_sebelum,
            dampak_sesudah: req.dampak_sesudah,
            link_foto: req.link
        }).then(() => {
            return cb(null, "success update");
        }).catch((error) => {
            return cb(error);
        })
    },
    deleteDampak: (req, cb) => {
        db(`${tablename}`).where('id_proyek', req.id_proyek)
        .del()
        .then((result) => {
            return cb(null, "success delete");
        }).catch((error) => {
            return cb(error);
        })
    },
    getAllDampak: (cb) => {
        db(`${tablename}`).select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    },
    getDampak: (req, cb) => {
        db(`${tablename}`)
        .select().where('id_proyek', req.id_proyek)
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    }
}