const { PrismaClient } = require('../../generated/prisma');

const prisma = new PrismaClient();

const getAllUsers = async () => {
  try{
    const users = await prisma.user.findMany()
    return users
  } catch(err){
    console.error('err: ', err.message)
  }
}

const getUser = async (id) => {
  try{
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  })
  return user
  } catch(err){
    console.error('err: ', err.message)
  }
}

const newUser = async (data) => {
  try{
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
    }
  })
  } catch(err){
    console.error('err: ', err.message)
  }
}

const updateUser = async (id, data) => {
  try{
    const user = await prisma.user.update({
      where: {
        id: id
      },
      data: {
        email: data.email,
        password: data.password
      }
    })
    return user
  } catch(err) {
    console.error('error: ', err.message)
  }
}

const deleteUser = async (id) => {
  try{
    const user = await prisma.user.delete({
      where: {
        id: id
      }
    })
  } catch(err){
    console.error('error: ', err.message)
  }
}

module.exports = {newUser, getAllUsers, getUser, updateUser, deleteUser}