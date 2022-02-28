

module.exports = {
    async teste(req,res){
        return res.send({
            message:"isso está funcionando finalmente!",
            user: req.userId
        })
    }
}