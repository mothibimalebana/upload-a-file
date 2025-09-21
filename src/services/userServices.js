const { PrismaClient } = require('../../generated/prisma');
const { deleteUser } = require('../controllers/userController');
const { post } = require('../routes/auth');

const prisma = new PrismaClient();

  const User = {

  //read services
  async getUser(email){
    try{
      return prisma.user.findFirst({
        where: {
          email: email 
        }
      });
    } catch(err){
      console.error('database')
    }
  },
  async getAllUsers(){
    return prisma.user.findMany();
  },
  async getAllUserFiles(id){
    return prisma.file.findMany({
      where: {
        userId: id
      }
    });
  },

  async getUserById(id){
    return prisma.user.findUnique({
      where: {
        id: id
      }
    })
  },

  async getUserFileById(id, userId){
    return prisma.file.findUnique({
      where: {
        id: id,
        userId: userId,
      }
    })
  },

  async getUserFiles(id){
    return prisma.files.findMany({
      where: {
        userId: id
      }
    })
  },

  //create services
  async createUser(data){
    console.log('data: ', data)
    try{
    return prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
      }
    })
    }catch(e){
      return e
    }
  },

  async createUserFile(id, data){
    return prisma.file.create({
      data: {
        filename: data.fieldname,
        originalname: data.originalname,
        encoding: data.encoding,
        mimetype: data.mimetype,
        destination: data.destination,
        path: data.path,
        size: data.size,
        folderId: folderId,
        userId: id,
      }
    })
  },

  //update services
  async updateUser(id, data){
    return prisma.user.update({
      where: {
        id: id
      },
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
      }
    })
  },
  
  async updateUserFile(id, postId, data){
    return prisma.file.update({
      where: {
        userId: id, 
        id: postId,
      },
      data: {
        filename: data.fieldname,
        originalname: data.originalname,
        encoding: data.encoding,
        mimetype: data.mimetype,
        destination: data.destination,
        path: data.path,
        size: data.size,
        userId: id,
      }
    })
  },
  async deleteUserFile(id, userId){
    return prisma.file.delete({
      where: {
        id: id,
        userId: userId,
      }
    })
  },
  async deleteUser(id){
    return prisma.user.delete({
      where: {
        id: id
      }
    })
  },
  async getFolders(userId) {
    return prisma.folder.findMany({
      where: { userId: userId }
    });
  },
  async getFolder(id, userId) {
    return prisma.folder.findFirst({
      where: { id: id, userId: userId }
    });
  },
  async createFolder(userId, name) {
    return prisma.folder.create({
      data: { userId: userId, name: name }
    });
  },
  async updateFolder(id, userId, name) {
    return prisma.folder.updateMany({
      where: { id: id, userId: userId },
      data: { name: name }
    });
  },
  async deleteFolder(id, userId) {
    return prisma.folder.deleteMany({
      where: { id: id, userId: userId }
    });
  }
}

module.exports={ User };