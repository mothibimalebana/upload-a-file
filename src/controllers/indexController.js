const { User } = require('../services/userServices')

exports.loginController = async (req, res) => {
    const {email} = req.body;
    const user = User.getUserByEmail(email)

    if(!user){
        res.status(401).json({message: 'No such user/ email found'});
        return
    }
}