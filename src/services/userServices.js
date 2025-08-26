const { PrismaClient } = require('../../generated/prisma');
const { deleteUser } = require('../controllers/userController');

const prisma = new PrismaClient();

  const User = {

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
  
  async updateUserFile(id, fileId, fileData){
    return prisma.file.update({
      where: {
        userId: id,
        id: fileId
      },
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

  async deleteUser(userId, fileId){
    return prisma.file.delete({
      where: {
        id: fileId,
      }
    })
  },

  async deleteUserFile(userId, fileId){
    return prisma.file.delete({
      where: {
        id: fileId,
        userId: userId,
      }
    })
  }
}

module.exports={ User };