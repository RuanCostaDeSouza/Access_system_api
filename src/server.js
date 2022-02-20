const express = require('express');
const Routes = require('./routes')

const connection = require('./database')

const app = express();

const Port = process.env.Port||3000;

app.use(express.json())
app.use(Routes)

//connection.authenticate().then(()=>{

    app.listen(Port,()=>{console.log(`Server connected in Port ${Port}`)})
//}).catch(erro=>console.log)