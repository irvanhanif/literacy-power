const {
    insertDampak,
    deleteDampak, 
    getAllDampak,
    getDampak, 
    updateDampak
} = require('./dampak.service');
const { ERROR, SUCCESS } = require('../response');
const { dampakSchema } = require('../validation.schema');

module.exports = {
    postDampak: async (req, res) => {
        if(req.body.tanggal == null) req.body.tanggal = new Date();
        try{
            await dampakSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        insertDampak(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    updateDampak: async (req, res) => {
        try{
            await dampakSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        req.body.id_proyek = req.params.id;
        updateDampak(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    deleteDampak: (req, res) => {
        req.body.id_proyek = req.params.id;
        deleteDampak(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    allDampak: (req, res) => {
        getAllDampak((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    detailDampak: (req, res) => {
        req.body.id_proyek = req.params.id;
        getDampak((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    }
}