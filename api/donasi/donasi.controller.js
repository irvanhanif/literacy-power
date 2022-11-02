const {
    insertDonasi,
    getAllDonasi
} = require('./donasi.service');
const { ERROR, SUCCESS } = require('../response');
const { donasiSchema } = require('../validation.schema');

module.exports = {
    postDonasi: async (req, res) => {
        try{
            await donasiSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        insertDonasi(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    allDonasi: (req, res) => {
        getAllDonasi((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    }
}