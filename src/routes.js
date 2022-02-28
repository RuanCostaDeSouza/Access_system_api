const Express = require('express');
const UserController = require('./Controller/UserController');
const AcessesController = require('./Controller/AcessesController');
const authMiddleware = require('./middlewares/auth')

const Route = Express.Router();
//access routes
Route.post('/login',AcessesController.login);
Route.post('/RecoverPassword', AcessesController.recorverPasswordSendEmail)
//User routes
Route.post('/register',UserController.store);
Route.put('/change/password')
module.exports = Route