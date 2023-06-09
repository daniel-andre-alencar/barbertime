const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;


const Clientes = new Schema ({

    nome        : {type:String, required: true},
    cpf         : {type:String, required: true},
    cep         : {type:String, required: true},
    email       : {type:String, required: true},
    tel         : {type:String, required: true}
    
})

const ClienteModel = mongoose.model('clientes', Clientes)

module.exports = {ClienteModel}