const {
    insertDampak,
    deleteDampak, 
    getAllDampak
} = require('./review.service');
const { ERROR, SUCCESS } = require('../response');

module.exports = {
    postDampak: (req, res) => {
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