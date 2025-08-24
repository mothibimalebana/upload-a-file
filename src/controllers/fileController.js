const  { User } = require('../services/userServices');

exports.getAllFiles = async (req, res) => {
  try {
    const files = await User.getAllUserFiles(req.params.id);
    console.log(files)
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUserFile = async (req, res) => {
  try {
    const user = await User.createUserFile(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};