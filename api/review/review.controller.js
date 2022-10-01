const {
    insertReview,
    deleteReview, 
    getAllReview
} = require('./review.service');
const { ERROR, SUCCESS } = require('../response');
const { reviewSchema } = require('../validation.schema');

module.exports = {
    postReview: async (req, res) => {
        let validation;
        try{
            validation = await reviewSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        insertReview(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    deleteReview: (req, res) => {
        req.body.id_review = req.params.id;
        deleteReview(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    allReview: (req, res) => {
        getAllReview((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    }
}