const User = require('../model/User')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const AuthConfig = require('../config/auth.json')

module.exports = {
    async store (req,res) {
        try{

            const {name,email} = req.body

            const verifyEmail = await User.findOne({
                where:{email:email}
            })
            
            if(verifyEmail){
                res.status(400).json({
                    message:"Email already exists, please try again with a new email!"
                })
            }else{

                const password = await Bcrypt.hash(req.body.password,10)
                
                const user = await User.create({name, email, password})

                const token = jwt.sign({id:user.id}, AuthConfig.secret, {
                    expiresIn:86500,
                })
                
                return res.status(200).json({
                    user,
                    token,
                })
            }

            
        }catch(error){
            return res.status(500).json({
                message:"Internal server error, please try again later!"
            })
        }
    },
    
    async changePassword (req,res){
        const id = req.userId;

        const {newPassword} = req.body
        
        const user = await User.findByPk(id);

        if(!user){
            return res.status(400).json({
                message:"User not found!"
            })
        }else{
            const hashPassword = await Bcrypt.hash(newPassword,10)

            await User.update({
                password:hashPassword
            },{where:{id}}).then(()=>{
                return res.status(200).json({message:"Password changed successfully"})
            }).catch((erro)=>{
                console.log(erro);
                return res.status(500).json({message:"Internal server error, please try again later"})
            })
        }
    }
    
}