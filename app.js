require("dotenv").config();
const express = require('express') // Declaro libreria express
const cors = require("cors");
const dbConnect = require("./config/mongo");
const app = express()
const path = require('path');

dbConnect()

app.use(cors());

const port = process.env.PORT || 3000;

// Seteando el motor de plantillas ejs
app.set('view engine','ejs')

// configuracion clasica para capturar datos de los inputs y usar el formato json
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static('public'))

const criptos = require('./routes/cripto')
app.use(criptos)

app.listen(port, ()=>{
    console.log('¡Server UP! en http://localhost:3000')
})