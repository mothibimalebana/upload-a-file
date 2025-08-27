const { User } = require('../services/userServices')
const bcrypt = require('bcryptjs')

exports.signUPController = async (req, res) => {
    try{
        const {email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await User.createUser(req.body)

        res.redirect('/')
    } catch (error){
        console.error(error);
        next(error);
    }
}