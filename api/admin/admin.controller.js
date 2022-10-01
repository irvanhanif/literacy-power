const { 
    insertAdmin,
    updateAdmin,
    deleteAdmin,
    getAdminByUsername,
    getAllAdmin
} = require('./admin.service');
const { compareSync, genSaltSync, hashSync } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { SUCCESS, ERROR } = require('../response');
const salt = genSaltSync(10);

module.exports = {
    register: (req, res) => {
        req.body.password = hashSync(req.body.password, salt);
        insertAdmin(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);

            const token = sign({admin: result[0]}, process.env.APP_KEY, {algorithm: "HS256", expiresIn: "24h"});
            return SUCCESS(res, 200, {admin: result[0], token: token});
        });
    },
    update: (req, res) => {
        req.body.id_admin = req.params.id;
        updateAdmin(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);

            return SUCCESS(res, 200, result);
        })
    },
    deleteAdmin: (req, res) => {
        req.body.id_admin = req.params.id;
        deleteAdmin(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);

            return SUCCESS(res, 200, result);
        })
    },
    login: (req, res) => {
        getAdminByUsername(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            const verif = compareSync(req.body.password, result[0].password);
            delete result[0].password;

            const token = sign({admin: result[0]}, process.env.APP_KEY, {algorithm: "HS256", expiresIn: "24h"});
            return SUCCESS(res, 200, {admin: result[0], token: token});
        })
    },
    allAdmin: (req, res) => {
        getAllAdmin((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    }
}