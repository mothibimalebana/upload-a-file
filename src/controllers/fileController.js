const  { User } = require('../services/userServices');

exports.getAllFiles = async (req, res) => {
  try {
    const files = await User.getAllUserFiles(Number(req.params.userId));
    console.log(files)
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports. getFile = async (req, res) => {
  try {
    const files = await User.getUserFile(Number(req.params.userId), Number(req.params.fileId));
    console.log(files)
    res.json(files);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFile = async (req, res) => {
  try {
    const file = await User.createUserFile(Number(req.params.userId),req.body, req.file);
    res.status(201).json(file);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

  exports.updateFile = async (req, res) => {
    try {
      console.log(req.body)
      const file = await User.updateUserFile(Number(req.params.userId) , req.body)
      res.status(201).json(file)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };

  exports.deleteFile = async (req, res) => {
    try {
      console.log(req.body)
      const user = await User.deleteUserFile(Number(req.params.id))
      res.status(201).json(user)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };
