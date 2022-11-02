const {
    insertBuku,
    deleteBuku, 
    getAllBuku,
    updateBuku,
    getBuku
} = require('./buku.service');
const { ERROR, SUCCESS } = require('../response');
const { bukuSchema } = require('../validation.schema');

module.exports = {
    postBuku: async (req, res) => {
        try{
            await bukuSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        insertBuku(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    updateBuku: async (req, res) => {
        try{
            await bukuSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        req.body.id_buku = req.params.id;
        updateBuku(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    deleteBuku: (req, res) => {
        req.body.id_buku = req.params.id;
        deleteBuku(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    detailBuku: (req, res) => {
        req.body.id_buku = req.params.id;
        getBuku((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    allBuku: (req, res) => {
        getAllBuku((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    }
}