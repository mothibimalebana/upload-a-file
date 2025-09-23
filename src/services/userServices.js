const { PrismaClient } = require('../../generated/prisma');

const prisma = new PrismaClient();

const getAllUsers = async () => {
  const users = await prisma.user.findMany()
  console.log(users)
}

getAllUsers()