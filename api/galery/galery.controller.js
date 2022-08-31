const {
    insertPhoto,
    deletePhoto,
    getAllPhoto,
    detailPhoto
} = require('./galery.service');
const { ERROR, SUCCESS } = require('../response');
const cloudinary = require('../storage/cloudinary');

module.exports = {
    postPhoto: async (req, res) => {
        const result = await cloudinary.uploader.upload(req.file.path);
        if(!result) return ERROR(res, 500, "Error when saving photo");
        
        req.body.nama = req.file.originalname;
        req.body.link = result.secure_url;
        insertPhoto(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
                
            return SUCCESS(res, 200, result);
        })
    },
    deletePhoto: (req, res) => {
        req.body.id_galery = req.params.id;
        detailPhoto(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            cloudinary.uploader.destroy(result[0].public_id, (errors, results) => {
                if(errors) return ERROR(res, 500, errors);

                deletePhoto(req.body, (errors1, results1) => {
                    if(errors1) return ERROR(res, 500, errors1);

                    return SUCCESS(res, 200, results1);
                })
            });
        })
    },
    allPhoto: (req, res) => {
        getAllReview((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        })
    }
}