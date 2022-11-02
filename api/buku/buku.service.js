const db = require('../db/db.config');
const tablename = 'buku'

module.exports = {
    insertBuku: (req, cb) => {
        db(`${tablename}`).insert({
            coverUrl: req.coverUrl,
            judul: req.judul,
            penulis: req.penulis,
            negara: req.negara,
            bahasa: req.bahasa,
            genre: req.genre,
            penerbit: req.penerbit,
            tahun: req.tahun,
            halaman: req.halaman,
            ringkasan: req.ringkasan
        }).then(() => {
            return cb(null, "success submit");
        }).catch((error) => {
            return cb(error);
        })
    },
    updateBuku: (req, cb) => {
        db(`${tablename}`)
        .where(`id_${tablename}`, req.id_buku)
        .update({
            coverUrl: req.coverUrl,
            judul: req.judul,
            penulis: req.penulis,
            negara: req.negara,
            bahasa: req.bahasa,
            genre: req.genre,
            penerbit: req.penerbit,
            tahun: req.tahun,
            halaman: req.halaman,
            ringkasan: req.ringkasan
        }).then(() => {
            return cb(null, "success update");
        }).catch((error) => {
            return cb(error);
        })
    },
    deleteBuku: (req, cb) => {
        db(`${tablename}`).where(`id_${tablename}`, req.id_buku)
        .del()
        .then((result) => {
            return cb(null, "success delete");
        }).catch((error) => {
            return cb(error);
        })
    },
    getBuku: (req, cb) => {
        db(`${tablename}`)
        .where(`id_${tablename}`, req.id_buku)
        .select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    },
    getAllBuku: (cb) => {
        db(`${tablename}`).select()
        .then((result) => {
            return cb(null, result);
        }).catch((error) => {
            return cb(error);
        })
    }
}