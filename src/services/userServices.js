const { PrismaClient } = require('../../generated/prisma');
const { deleteUser } = require('../controllers/userController');

const prisma = new PrismaClient();

  const User = {
  //index of all services
  async getAllUsers(){},
  async getUserById(id){},
  async createUser(data){},
  async updateUser(id, data){},
  async deleteUser(id){},
  async getAllUserFiles(id){},
  async createUserFile(id, data){},
  async updateUserFile(id, data){},
  async deleteUserFile(id){},

  //read services
  async getAllUser(){
    return prisma.user.findMany();
  },
  async getAllUserFiles(id){
    return prisma.files.findMany({
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

  async getUserFiles(id){
    return prisma.files.findMany({
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

  async createUserFile(id, data){
    return prisma.file.create({
      data: {
        filename: data.fileName,
        size: data.fileSize,
        url: data.fileUrl,
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
  
  async updateUserFile(id, data){
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