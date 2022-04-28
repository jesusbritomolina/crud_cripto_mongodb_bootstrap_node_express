const mongoose = require('mongoose')
const Schema = mongoose.Schema

const criptoSchema = new Schema({
    nombre: String,
    precio:Number,
    simbolo: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
}, {versionKey:false})

module.exports = mongoose.model('cripto', criptoSchema)