const mongoose = require('mongoose')

const dbConnect = () => {
    mongoose.connect("mongodb+srv://jesus:jesus@cluster0.zcaao.mongodb.net/crud_mongodb?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (!err) {
            console.log('**** CONEXION CORRECTA ****')
        } else {
            console.log('***** ERROR DE CONEXION ****')
        }
    });
}

module.exports = dbConnect