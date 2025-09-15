const passport = require('passport');
const  { User } = require('../services/userServices');




exports.getUser = async (req, res) => {
  try {
    const user = await User.getUser(req.body.email);
    res.status(201).json({message: 'logged in', user: user}); 
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
    if(err.code === "P2002"){
      res.status(501).json({message: 'email is already registered'})
    }
    else {res.status(500).json({err})};
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
