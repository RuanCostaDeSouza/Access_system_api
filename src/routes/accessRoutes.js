const Express = require('express');
const AcessesController = require('../Controller/AcessesController');
const AuthMiddleware = require('../middlewares/auth')

const Route = Express.Router();

Route
    .post('/login',AcessesController.login)
    // .put('/change/password',AuthMiddleware,)
    

module.exports = Route