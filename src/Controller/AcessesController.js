const User = require('../model/User')
const Bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const { password } = require('../config/database')

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
    
                    return res.status(200).json({
                        mensage:"usuario logado!"
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
    async recorverPasswordSendEmail (req,res){
        const user = "ruan2015381@gmail.com"
        const pass = "dolly3000"
        const transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            auth:{user,pass}
        })

        const {email} = req.body;

        const verifyUser = await User.findOne({where:{email}})

        if(!verifyUser){
            return res.status(401).json({
                message:"User not exists!"
            })
        }

        transporter.sendMail({
            from:user,
            to:verifyUser.email,
            subject:"email para o ri",
            html:`
                <div
                    style="
                    margin: 0 auto;
                    width: 90%;
                    text-align: center;
                    "
                >
                <h1>Oi Ricardo</h1>
            
                <p>salve seus prego chama que meu app ta top clica no botão aqui em baixo que vcs vai direto pro google </p>
            
                <a href="https://www.google.com/" >
                <button
                    style="
                    margin: 0 auto;
                    height: 30px;
                    width: 100px;
                    border-radius: 60px;
                    background-image: linear-gradient(
                        270deg,
                        #2f494b 0,
                        #304343 12.5%,
                        #303c3b 25%,
                        #2f3534 37.5%,
                        #2e2e2e 50%,
                        #2c2728 62.5%,
                        #292024 75%,
                        #261a21 87.5%,
                        #23151f 100%
                    );
                    color: #fff;
                    cursor: pointer;
                    "
                >
                    clique aqui
                </button>
                </a>
            
                <p>se não funcionar utilize a URL:https://www.google.com/</p>
            </div>
            `
        }).then((infos)=>{
            return res.status(200).json({
                message:"Mensagem enviada com sucesso!"
            })
        }).catch(erro=>{
            console.log (erro)
            return res.status(500).send(erro)
        })

        
    }
    ,
    async recorverPassword (req,res){
        const {email,newPassword} = req.body;

        const user = await User.findOne({
            where:{email}
        })

        if(!user){
            return res.status(401).json({
                message:"User not exist!"
            })
        }

        const hashPassword = await Bcrypt.hash(newPassword,10)

        await User.update(
            {
                password:hashPassword
            },
            {
                where:{email}
            }
        )

        return res.status(200).json({
            message:"Senha alterada com sucesso!",
        })


    }

}