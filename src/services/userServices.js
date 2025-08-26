const { PrismaClient } = require('../../generated/prisma');
const { deleteUser } = require('../controllers/userController');

const prisma = new PrismaClient();

  const User = {
  //index of all services
  async getAllUsers(){},
  async getUser(id){},
  async getUserById(id){},
  async createUser(data){},
  async updateUser(id, data){},
  async deleteUser(id){},
  async getAllUserFiles(id){},
  async createUserFile(id, data, fileData){},
  async updateUserFile(id, data, fileData){},
  async deleteUserFile(id){},

  //read services
  async getAllUser(){
    return await prisma.user.findMany();
  },
  async getUser(id){
    return await prisma.user.findFirst({
      where: {
        id: id
      }
    })
  },
  async getAllUserFiles(id){
    return await prisma.file.findMany({
      where: {
        userId: id
      }
    });
  },
  
  async getUserFile(userId, fieldId){
    return await prisma.file.findUnique({
      where: {
        id: fieldId,
        userId: userId,
      }
    })
  },

  async getUserById(id){
    return prisma.user.findUnique({
      where: {
        id: id
      }
    })
  },

  async getUserFiles(id){
    return prisma.file.findMany({
      where: {
        userId: id
      }
    })
  },

  //create services
  async createUser(data){
    return prisma.user.create({
      data: {
        email: data.email,
        passwordHash: data.passwordHash,
      }
    })
  },

  async createUserFile(id, data, fileData){
    console.log(fileData)
    return prisma.file.create({
      data: {
        fileName: fileData.originalname,
        fieldName: fileData.fieldname,
        originalName: fileData.originalname,
        encoding: fileData.encoding,
        mimetype: fileData.mimetype,
        size: fileData.size,
        destination: fileData.destination,
        path: fileData.path,
        userId: id
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
  
  async updateUserFile(id, data, fileData){
    return prisma.user.update({
      where: {
        userId: id
      },
      data: {
        filename: data.fileName,
        size: data.fileSize,
        url:  data.url,
        userId: id
      }
    })
  },

  async deleteUser(id){
    return prisma.user.delete({
      where: {
        id: id
      }
    })
  }
}

module.exports={ User };