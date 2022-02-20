const User = require('../model/User')
const Bcrypt = require('bcrypt')


module.exports = {
    async store (req,res) {
        try{

            const {name,email} = req.body

            const verifyEmail = await User.findOne({
                where:{email:email}
            })
            
            if(verifyEmail){
                res.status(400).json({
                    mensage:"E-mail já cadastrado por favor informar um email valido!"
                })
            }else{

                const password = await Bcrypt.hash(req.body.password,10)
                
                const user = await User.create({name, email, password})
                
                return res.status(200).json(user)
            }

            
        }catch(error){
            return res.status(500).json({
                mensage:"Ocorreu um erro por favor tente novamente mais tarde!"
            })
        }
    },
    async changePassword (req,res){
        const {email, newPassword} = req.body;

        const user = await User.findOne({where:{email}});

        if(!user){
            return res.status(400).json({
                message:"Error: nenhum e-mail encontrado"
            })
        }else{
            const hashPassword = await Bcrypt.hash(newPassword,10)

            await User.update({
                password:hashPassword
            },{where:{email}})

                return res.status(200).json({
                    message:"Senha alterada com sucesso!",
                })
                
           
        }
    }
    
}