const express = require('express')
const router = express.Router()
var fs = require('fs');
var path = require('path');

const criptoController = require('../controllers/criptoController')

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  
const upload = multer({ storage: storage })

// Mostrar todos las cripto (GET)
router.get('/', criptoController.mostrar)
// Crear cripto (POST)
router.post('/crear', criptoController.crear)
router.post('/crearconfile', upload.single('imagencrypto'), criptoController.crearconfile)
// Editar cripto (POST)
router.post('/editar', criptoController.editar)
router.post('/editarconfile', upload.single('imagen_editar'), criptoController.editarconfile)
// Borrar cripto (GET)
router.get('/borrar/:id', criptoController.borrar)
module.exports = router