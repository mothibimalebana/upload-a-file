const  { getAllUsersService, User } = require('../services/userServices');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUser(); 
    console.log(users)
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log(req.body)
    const user = await User.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
