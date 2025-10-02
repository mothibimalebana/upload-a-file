const { getFolder, getAllFolder, newFolder, updateFolder, deleteFolder } = require("../services/folderServices");



exports.fetchFolder = async (req, res) => {
  try {
    const folder = await getFolder(req.user.id, req.params.id);
    res.status(201).json({message: 'File info: ', folder: folder}); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.fetchAllFolder = async (req, res)  => {
  try{
    const folders = await getAllFolder(req.user.id)
    res.status(201).json({message: 'list of folders: ', folders: folders});
  } catch(err) {
    res.status(501).json({error: err.message})
  }
}
exports.createFolder = async (req, res) => {
  try {
    const folder = await newFolder(req.user.id, req.body);
    res.status(201).json({message: 'folder has been created', folder: folder});
  } catch (err) {
    if(err.code === "P2002"){
      res.status(501).json({message: 'email is already registered'})
    }
    else {res.status(500).json({'error: ': err.message})};
  }
};


  exports.updateFolder = async (req, res) => {
    try {
      const folder = await updateFolder(req.user.id, req.params.id, req.file, req.body.id)
      res.status(201).json({message: 'folder updated: ', folder: folder})
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };

  exports.deleteFolder = async (req, res) => {
    try {
      const folder = await deleteFolder(req.user.id, req.params.id)
      res.status(201).json(folder)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };
