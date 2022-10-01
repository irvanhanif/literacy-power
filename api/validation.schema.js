const joi = require('@hapi/joi');

const authSchema = joi.object({
    firstName: joi.string().min(3).max(65).required(),
    lastName: joi.string().max(65).required(),
    password: joi.string().min(8).max(255).required()
});
const reviewSchema = joi.object({
    note: joi.string().required(),
    name: joi.string().alphanum().min(3).max(100).required(),
    university: joi.string().min(3).max(255).required()
})
const dampakSchema = joi.object({
    deskripsi: joi.string().required()
})
module.exports = {
    authSchema: authSchema,
    reviewSchema: reviewSchema,
    dampakSchema: dampakSchema
}