const {
    getAllSubscriber,
    insertSubscribe,
    deleteSubscribe
} = require('./subscribe.service');
const { ERROR, SUCCESS } = require('../response');
const { subscribeSchema } = require('../validation.schema');

module.exports = {
    postSubscribe: async (req, res) => {
        try{
            await subscribeSchema.validateAsync(req.body);
        }catch(err){
            return ERROR(res, 500, err.details[0].message);
        }
        insertSubscribe(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    deleteSubscribe: (req, res) => {
        req.body.id_subscribe = req.params.id;
        deleteSubscribe(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    },
    allSubsriber: (req, res) => {
        getAllSubscriber((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    }
}