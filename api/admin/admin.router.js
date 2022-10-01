const express = require('express');
const router = express.Router();
const { tokenValidation } = require('../middleware');
const { 
    register,
    login,
    deleteAdmin,
    update,
    allAdmin
} = require('./admin.controller');

router.get('/', tokenValidation, allAdmin)
router.post('/register', tokenValidation, register);
router.post('/login', login);
router.put('/update/:id', tokenValidation, update);
router.delete('/delete/:id', tokenValidation, deleteAdmin);

module.exports = router;