const express = require('express');
const Routes = require('./routes');
const cors = require('cors')

const connection = require('./database')
const PORT = process.env.PORT||3030;

const app = express();
app.use(cors())

app.use(express.json())
Routes(app)

connection.authenticate().then(()=>{
    app.listen(PORT,()=>{console.log(`Server connected in Port ${PORT}`)})
}).catch(erro=>console.log)