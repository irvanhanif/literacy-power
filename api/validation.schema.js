const joi = require('@hapi/joi');

module.exports = {
    authSchema: joi.object({
        firstName: joi.string().min(3).max(65).required(),
        lastName: joi.string().max(65).required(),
        password: joi.string().min(8).max(255).required()
    }),
    reviewSchema: joi.object({
        username: joi.string().min(3).max(100).required(),
        userProfession: joi.string().min(3).max(150).required(),
        testimoni: joi.string().min(3).required()
    }),
    dampakSchema: joi.object({
        nama: joi.string().min(3).max(150).required(),
        lokasi: joi.string().min(3).max(150),
        tanggal: joi.date().allow(null),
        content: joi.string().required(),
        dampak_sebelum: joi.string().optional(),
        dampak_sesudah: joi.string().optional(),
        dokumentasi: joi.string().optional()
    }),
    galerySchema: joi.object({
        nama: joi.string().min(3).max(150).required(),
        show_on_home: joi.boolean().optional(),
        link: joi.string().required(),
        public_id: joi.string().required()
    }),
    bukuSchema: joi.object({
        coverUrl: joi.string().optional(),
        judul: joi.string().min(3).max(65).required(),
        penulis: joi.string().max(100).optional(),
        negara: joi.string().min(3).max(150).required(),
        bahasa: joi.string().min(3).max(45).required(),
        genre: joi.string().max(45).optional(),
        penerbit: joi.string().max(150).optional(),
        tahun: joi.number(),
        halaman: joi.number().required()
    }),
    donasiSchema: joi.object({
        judul: joi.string().min(3).max(150).required(),
        step: joi.string().max(150).required()
    }),
    subscribeSchema: joi.object({
        email: joi.string().email({tlds: false})
    })
}