const express = require('express');
const Routes = require('./routes');
const cors = require('cors')

const connection = require('./database')

const app = express();
app.use(cors())
const Port = process.env.Port;

app.use(express.json())
app.use(Routes)

connection.authenticate().then(()=>{

    app.listen(Port,()=>{console.log(`Server connected in Port ${Port}`)})
}).catch(erro=>console.log)