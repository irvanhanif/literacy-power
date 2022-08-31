const {
    insertReview,
    deleteReview, 
    getAllReview
} = require('./review.service');
const { ERROR, SUCCESS } = require('../response');

module.exports = {
    postReview: (req, res) => {
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