const { PrismaClient } = require('../../generated/prisma');

const prisma = new PrismaClient();

const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  return users
}

const getUser = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  })
  console.log(user)
}
