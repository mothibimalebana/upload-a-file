const  { User } = require('../services/userServices');

exports.getAllFiles = async (req, res) => {
    if(!req.isAuthenticated || !req.isAuthenticated()){
        try {
        const files = await User.getAllUserFiles(req.user.id);
        console.log(files)
        res.json(files);
        } catch (err) {
        res.status(500).json({ error: err.message });
        }
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
};

exports.createFile = async (req, res) => {
    try {
            console.log('user: ', req.user.id ,'req.file: ', req.file);
            const file = await User.createUserFile(req.user.id, req.file);
            res.status(201).json(file);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
};

  exports.updateFile = async (req, res) => {
    try {
      console.log(req.body)
      const file = await User.updateUserFile(Number(req.params.id) , req.body)
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
