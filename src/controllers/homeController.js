const  { User } = require('../services/userServices');

exports.getAllFiles = async (req, res) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
    }
    try {
        const files = await User.getAllUserFiles(req.user.id);
        console.log(files)
        res.json(files);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};

exports.getFile = async (req, res) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
    }
    try {
        const file = await User.getUserFileById(Number(req.params.id), req.user.id);
        res.json(file);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
exports.createFile = async (req, res) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
    }
    try {
            const file = await User.createUserFile(req.user.id, req.file);
            res.status(201).json(file);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
};

exports.updateFile = async (req, res) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
    }
    try {
        const file = await User.updateUserFile(Number(req.user.id) , Number(req.params.id), req.file)
        res.status(201).json(file)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };

  exports.deleteFile = async (req, res) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
    }
    try {
      const user = await User.deleteUserFile(Number(req.params.id), req.user.id)
      res.status(201).json(user)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };
