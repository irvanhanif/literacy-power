const {
    insertPhoto,
    deletePhoto,
    getAllPhoto,
    detailPhoto,
    searchPhoto
} = require('./galery.service');
const { ERROR, SUCCESS } = require('../response');
const cloudinary = require('../storage/cloudinary');
const { galerySchema } = require('../validation.schema');

module.exports = {
    postPhoto: async (req, res) => {
        const result = await cloudinary.uploader.upload(req.file.path);
        if(!result) return ERROR(res, 500, "Error when saving photo");
        
        req.body.nama = req.file.originalname;
        req.body.link = result.secure_url;
        req.body.public_id = result.public_id;
        try {
            await galerySchema.validateAsync(req.body);
        } catch (err) {
            return ERROR(res, 500, err.details[0].message);
        }
        insertPhoto(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
                
            return SUCCESS(res, 200, result);
        })
    },
    deletePhoto: (req, res) => {
        req.body.id_galery = req.params.id;
        detailPhoto(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            
            cloudinary.uploader.destroy(result[0].public_id).then(() => {
                deletePhoto(req.body, (errors1, results1) => {
                    if(errors1) return ERROR(res, 500, errors1);

                    return SUCCESS(res, 200, results1);
                })
            }).catch((errors) => {
                return ERROR(res, 500, errors);
            })
        })
    },
    allPhoto: (req, res) => {
        getAllPhoto((error, result) => {
            if(error) return ERROR(res, 500, error);
            
            return SUCCESS(res, 200, result);
        });
    },
    getPhoto: (req, res) => {
        req.body.id_galery = req.params.id;
        detailPhoto(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);

            return SUCCESS(res, 200, result);
        });
    },
    searchPhoto: (req, res) => {
        req.body.nama = req.params.nama;
        searchPhoto(req.body, (error, result) => {
            if(error) return ERROR(res, 500, error);
            if(result.length == 0) return ERROR(res, 404, "photo not found");

            return SUCCESS(res, 200, result);
        });
    }
}