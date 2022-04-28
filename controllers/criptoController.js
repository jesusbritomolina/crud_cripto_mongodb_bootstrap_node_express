const Cripto = require('../model/Cripto')
var fs = require('fs');
var path = require('path');

//Mostrar
module.exports.mostrar = (req, res) =>{
    Cripto.find({}, (error, criptos)=>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando las cripto'
            })
        }
        return res.render('index', {criptos: criptos})
    })
}

//Crear
module.exports.crear = (req, res)=>{
    //console.log(req.body)
    const cripto = new Cripto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        simbolo: req.body.simbolo,
        imagen: req.body.imagen
    })
    cripto.save(function(error,cripto){
        if(error){
            return res.status(500).json({
                message: 'Error al crear la cripto'
            })
        }
        res.redirect('/')
    })
}

//Crear con file 
module.exports.crearconfile = (req, res)=>{
   
    const cripto = new Cripto({
        nombre: req.body.nombre,
        precio: req.body.precio,
        simbolo: req.body.simbolo,
        img: {
            data: fs.readFileSync(path.join('uploads/' + req.file.filename)),
            //data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: req.file.mimetype
        }
    })

    cripto.save(function(error,cripto){
        if(error){
            return res.status(500).json({
                message: 'Error al crear la cripto'
            })
        }
        res.redirect('/')
    })
}

//Editar
module.exports.editar = (req,res)=>{

    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const precio = req.body.precio_editar
    const simbolo = req.body.simbolo_editar
    const imagen = req.body.imagen_editar

    Cripto.findByIdAndUpdate(id, {nombre, precio, simbolo, imagen}, (error, cripto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando la Criptomoneda'
            })
        }
        res.redirect('/')
    })
}

//Editar con file
module.exports.editarconfile = (req,res)=>{

    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const precio = req.body.precio_editar
    const simbolo = req.body.simbolo_editar
    const imagen = req.body.imagen_editar
    
    //valida si la imagen fue cargada
    if (req.file != undefined)  {
        //se selecciono alguna imagen y ya fue cargada se procede a actualizar todo
        Cripto.findByIdAndUpdate(id, {nombre, precio, simbolo,
            img: {
                data: fs.readFileSync(path.join('uploads/' + req.file.filename)),
                //data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: req.file.mimetype
            }
        }, (error, cripto)=>{
            if(error){
                return res.status(500).json({
                    message: 'Error actualizando la Criptomoneda'
                })
            }
            res.redirect('/')
        })

    }else{
        //actualizar sin imagen
        Cripto.findByIdAndUpdate(id, {nombre, precio, simbolo}, (error, cripto)=>{
            if(error){
                return res.status(500).json({
                    message: 'Error actualizando la Criptomoneda'
                })
            }
            res.redirect('/')
        })
    }
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Cripto.findByIdAndRemove(id, (error, cripto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando la Criptomoneda'
            })
        }
        res.redirect('/')
    })
}