const Express = require('express');
const UserController = require('../Controller/UserController');
const AuthMiddleware = require('../middlewares/auth');

const Route = Express.Router()

Route
    .post('/register',UserController.store)
    .put('/change/password',AuthMiddleware,UserController.changePassword)

module.exports = Route
