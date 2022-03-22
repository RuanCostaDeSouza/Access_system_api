const User = require('../model/User')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const AuthConfig = require('../config/auth.json')

module.exports = {
   
    async login (req,res){
        try{

            const {email, password} = req.body
    
            const user = await User.findOne({
                where:{email}
            })
           
            if(!user){
                res.status(400).json({
                    mensage:"E-mail invalido por favor realize o cadastro para continuar!"
                })
            }else{
    
                const validatePassword = await Bcrypt.compare(password,user.password)
                
                if(validatePassword){
                    user.password = undefined
                    const token = jwt.sign({id:user.id,email:user.email}, AuthConfig.secret, {
                        expiresIn:86500,
                    })

                    return res.status(200).json({
                        mensage:"usuario logado!",
                        user,
                        token,
                    })
                }else{
                    res.status(400).json({
                        mensage:"senha incorreta, por favor tente novamente"
                    })
                }
                
            }
        }catch(erro){
            console.log(erro)
            res.status(500).json({
                mensage:"Ocorreu um erro por favor tente novamente mais tarde!"
            })
        }
    },

}