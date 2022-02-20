const dotenv = require('dotenv')

dotenv.config()

module.exports= {
    dialect:'mysql',
    username:process.env.USER_NAME,
    host:process.env.HOST,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    define:{
        timestamps:true,
        underscored:true,
    }
}