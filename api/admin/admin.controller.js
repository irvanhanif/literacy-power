const { 
    insertAdmin,
    updateAdmin,
    deleteAdmin,
    getAdminByUsername,
    getAllAdmin,
    checkExistAdmin
} = require('./admin.service');
const { compareSync, genSaltSync, hashSync } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const { SUCCESS, ERROR } = require('../response');
const { authSchema } = require('../validation.schema');
const salt = genSaltSync(10);

module.exports = {
    register: async (req, res) => {
        req.body.username = req.body.firstName + ' ' + req.body.lastName;
        checkExistAdmin(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            if(result > 0) return ERROR(res, 409, "user is exist");
        
            // let validation;
            // try{
            //     validation = await authSchema.validateAsync(req.body);
            // }catch(err){
            //     return ERROR(res, 500, err.details[0].message);
            // }
            req.body.password = hashSync(req.body.password, salt);
            insertAdmin(req.body, (error, result) => {
                if(error) return ERROR(res, 500, error);

                const token = sign({admin: result[0]}, process.env.APP_KEY, {algorithm: "HS256", expiresIn: "24h"});
                return SUCCESS(res, 200, {admin: result[0], token: token});
            });
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