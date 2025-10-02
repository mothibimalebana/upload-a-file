const { PrismaClient } = require('../../generated/prisma');

const prisma = new PrismaClient();

const getAllFolder = async (userId) => {
    try{
        const folders = await prisma.folder.findMany({
            where: {
                userId: userId
            },
            take: 5
        })
        return folders
    } catch(err) {
        console.error('err: ', err.message)
    }
}

const getFolder = async (userId, folderId) => {
    try{
        const folder = await prisma.folder.findUnique({
            where: {
                id: Number(folderId),
                userId: Number(userId)
            }
        })
        return folder
    } catch(err){
        console.error('err: ', err.message);
    }
}

const newFolder = async(userId, folder) => {
    try{
        const newFolder = await prisma.folder.create({
            data: {
                name: folder.name,
                userId: Number(userId),
            }
        })
        return newFolder
    } catch(err) {
        console.error('err: ', err.message)
    }
}

const updateFolder = async (userId, folder, folderId) => {
    try{
        const updatedFolder = await prisma.folder.update({
            where: {
                userId: userId,
                id: Number(folderId)
            }, 
            data: {
                name: folder.name,
                userId: Number(userId),
            }
        }) 
        return updatedFolder
    } catch(err) {
        console.error('err: ', err.message);
    }
}

const deleteFolder = async (userId, folderId) => {
    try{
        const deletedFolder = await prisma.folder.delete({
            where: {
                userId: userId,
                id: folderId,
            }
        })
        return deletedFolder
    } catch(err) {
        console.error('err: ', err.message)
    }
}

module.exports = {getAllFolder, getFolder, newFolder, updateFolder, deleteFolder} 