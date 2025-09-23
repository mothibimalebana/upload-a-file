const  { getUser, getAllUsers, newUser, updateUser, deleteUser } = require('../services/userServices');
const bcrypt = require('bcryptjs');



exports.fetchUser = async (req, res) => {
  try {
    const user = await getUser(req.user.id);
    res.status(201).json({message: 'user info: ', user: user}); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.fetchAllUsers = async (req, res)  => {
  try{
    const users = await getAllUsers()
    res.status(201).json({message: 'list of users: ', users: users});
  } catch(err) {
    res.status(501).json({error: err.message})
  }
}
exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const user = await newUser(req.body);

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
      const user = await updateUser(Number(req.user.id), req.body)
      res.status(201).json(user)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };

  exports.deleteUser = async (req, res) => {
    try {
      console.log(req.body)
      const user = await deleteUser(Number(req.user.id))
      res.status(201).json(user)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };
