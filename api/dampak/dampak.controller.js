const {
    insertDampak,
    deleteDampak, 
    getAllDampak
} = require('./dampak.service');
const { ERROR, SUCCESS } = require('../response');
const { dampakSchema } = require('../validation.schema');

module.exports = {
    postDampak: async (req, res) => {
        let validation;
        try{
            validation = await dampakSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        insertDampak(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    deleteDampak: (req, res) => {
        req.body.id_dampak = req.params.id;
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
    }
}