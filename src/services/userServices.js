const { PrismaClient } = require('../../generated/prisma');
const { deleteUser } = require('../controllers/userController');

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