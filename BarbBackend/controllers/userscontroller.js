const Users = require('../models/users');

exports.CreateUser = async (req,res) =>{

    try {
        const users = Users.UsuarioModel.create(req.body);
        res.status(200).json(users)
    } catch (error) {
        
    }
}

exports.ValidaUser = async (req, res) => {

    const UserFront = req.body
    const UserBd = Users.UsuarioModel.find({email: `${req.body.email}`});
    const SenhaBd = Users.UsuarioModel.find({senha: `${req.body.senha}`});
    console.log(UserBd[0])
    console.log(SenhaBd[0])

    if(!UserBd){
        console.log(UserBd)
        res.send("Usuario não encontrado");
    }else if(!SenhaBd){
        res.send("Senha não encontrado");
    }else{
        res.send("Validado");
    }
}
