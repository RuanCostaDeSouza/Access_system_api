const UserRoutes = require('./userRoutes')
const AccessRoutes = require('./accessRoutes')

module.exports = (app) =>{
    app.use(
        UserRoutes,
        AccessRoutes
    )
}