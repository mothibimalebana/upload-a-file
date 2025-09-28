const  { getFile, getAllFiles, newFile, updateFile, deleteFile } = require('../services/fileServices');



exports.fetchFile = async (req, res) => {
  try {
    const file = await getFile(req.user.id, req.params.id);
    res.status(201).json({message: 'File info: ', file: file}); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.fetchAllFiles = async (req, res)  => {
  try{
    const files = await getAllFiles(req.user.id)
    res.status(201).json({message: 'list of Files: ', files: files});
  } catch(err) {
    res.status(501).json({error: err.message})
  }
}
exports.createFile = async (req, res) => {
  try {
    const file = await newFile(req.user.id, req.file, req.params.id);
    res.status(201).json({message: 'File has been created', file: file});
  } catch (err) {
    if(err.code === "P2002"){
      res.status(501).json({message: 'email is already registered'})
    }
    else {res.status(500).json({'error: ': err.message})};
  }
};


  exports.updateFile = async (req, res) => {
    try {
      const file = await updateFile(req.user.id, req.params.id, req.file, req.body.id)
      res.status(201).json({message: 'File updated: ', file: file})
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };

  exports.deleteFile = async (req, res) => {
    try {
      console.log(req.body)
      const File = await deleteFile(req.user.id, req.params.id)
      res.status(201).json(File)
    }
    catch (err) {
      res.status(500).json({ error: err.message })
    }
  };
