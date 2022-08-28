const cloudinary = require('cloudinary');

cloudinary.v2.config({
    cloud_name: process.env.C_NAME,
    api_key: process.env.C_KEY,
    api_secret: process.env.C_PASS
});

module.exports = cloudinary;