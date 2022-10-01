const { verify } = require('jsonwebtoken');
const { ERROR } = require('./response');

module.exports = {
    tokenValidation: (req, res, next) => {
        let token = req.get('authorization');
        if(!token) return ERROR(res, 500, "Access denied!");
        token = token.slice(7);

        verify(token, process.env.APP_KEY, {algorithms: "HS256"}, (error, decoded) => {
            if(error) return ERROR(res, 500, error);

            if(!decoded.admin.id_admin) return ERROR(res, 500, "Account doesnt admin");
            req.decoded = decoded;
            next();
        })
    }
}