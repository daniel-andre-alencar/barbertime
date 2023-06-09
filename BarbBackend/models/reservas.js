const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/reservas', { useNewUrlParser: true});

var Schema = mongoose.Schema;

var reserva = new Schema ({

    numero      : { type:Number, required: true},
    barbeiro    : { type:String, required: true},
    cliente     : { type:String, required: true},
    corte       : { type:String, required: true},
    data        : { type:Date, required: true},            
    inicio      : { type:String, required: true},
    fim         : { type:String, required: true},    
    valortotal  : { type:Number, required: true},    
    observacao  : { type:String, required: true},
    unidade     : { type:String, required: true},
    status      : { type:String, required: true}    
})

const reservaModel = mongoose.model('reservas_collections', reserva);


module.exports = {reservaModel}