const {
    insertReview,
    deleteReview, 
    getAllReview,
    updateReview,
    getReview
} = require('./review.service');
const { ERROR, SUCCESS } = require('../response');
const { reviewSchema } = require('../validation.schema');

module.exports = {
    postReview: async (req, res) => {
        try{
            await reviewSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        insertReview(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    updateReview: async (req, res) => {
        try{
            await reviewSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        req.body.id_review = req.params.id;
        updateReview(req.body, (error, result) => {
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
    detailReview: (req, res) => {
        req.body.id_review = req.params.id;
        getReview(req.body, (error, result) => {
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