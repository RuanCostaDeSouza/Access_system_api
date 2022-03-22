const Express = require('express');
const UserController = require('../Controller/UserController');
const AuthMiddleware = require('../middlewares/auth');

const Route = Express.Router()

Route
    .post('/register',UserController.store)
    .put('/change/password/:id',AuthMiddleware,UserController.changePassword)
    .get('/user/:email',UserController.ShowUser)

module.exports = Route
