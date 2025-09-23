const  { getUser, getAllUsers } = require('../services/userServices');
const bcrypt = require('bcryptjs');



exports.fetchUser = async (req, res) => {
  try {
    const user = await this.getUser;
    res.status(201).json({message: 'logged in', user: user}); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.fetchAllUsers = async (req, res)  => {
  try{
    const users = await getAllUsers()
  } catch(err) {
    console.error('error: ', err.message)
  }
}
exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    console.log('payload: ', req.body)

    res.status(201).json(user);
  } catch (err) {
    if(err.code === "P2002"){
      res.status(501).json({message: 'email is already registered'})
    }
    else {res.status(500).json({'error: ': err.message})};
  }
};

  exports.updateUser = async (req, res) => {
    try {
      console.log(req.body)
      const user = await User.updateUser(Number(req.params.id) , req.body)
      res.status(201).json(user)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      console.log(req.body)
      const user = await User.deleteUser(Number(req.params.id))
      res.status(201).json(user)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };
