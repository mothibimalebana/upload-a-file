const { User } = require('../services/userServices')
const jwt = require('jsonwebtoken') //for creating tokens

exports.loginController = async (req, res) => {
    const {email, password} = req.body;
    const user = User.getUserByEmail(email)

    if(!user){
        res.status(401).json({message: 'No such user/ email found'});
        return
    }

    if(user.password === password){
        const payload = {id: user.id};
        const token = jwt.sign(payload, "secret")
        res.json({
            message: "OK",
            token: token
        })
    } else{
        res.status(401).json({ message: 'passwords did not'})
    }
}