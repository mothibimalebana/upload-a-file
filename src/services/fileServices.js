const { PrismaClient } = require('../../generated/prisma');

const prisma = new PrismaClient();

const getAllFiles = async (userId) => {
    try{
        const files = await prisma.file.findMany({
            where: {
                userId: userId
            },
            take: 10
        })
        return files
    } catch(err) {
        console.error('err: ', err.message)
    }
}

const getFile = async (userId, fileId) => {
    try{
        const file = await prisma.file.findUnique({
            where: {
                id: Number(fileId),
                userId: Number(userId)
            }
        })
        return file
    } catch(err){
        console.error('err: ', err.message);
    }
}

const newFile = async(userId, file, folderId) => {
    try{
        const newFile = await prisma.file.create({
            data: {
                filename: file.filename,
                originalname: file.originalname,
                encoding: file.encoding,
                mimetype: file.mimetype,
                destination: file.destination,
                path: file.path,
                size: file.size,
                userId: userId,
                folderId: Number(folderId)
            }
        })
        return newFile
    } catch(err) {
        console.error('err: ', err.message)
    }
}

const updateFile = async (userId, fileId, file, folderId) => {
    try{
        const updatedFile = await prisma.file.update({
            where: {
                userId: userId,
                id: Number(fileId)
            }, 
            data: {
                filename: file.filename,
                originalname: file.originalname,
                encoding: file.encoding,
                mimetype: file.mimetype,
                destination: file.destination,
                path: file.path,
                size: file.size,
                userId: userId,
                folderId: Number(folderId)
            }
        }) 
        return updatedFile
    } catch(err) {
        console.error('err: ', err.message);
    }
}

const deleteFile = async (userId, fileId) => {
    try{
        const deletedFile = await prisma.file.delete({
            where: {
                userId: Number(userId),
                id: Number(fileId),
            }
        })
        return deletedFile
    } catch(err) {
        console.error('err: ', err.message)
    }
}

module.exports = {newFile, getAllFiles, getFile, updateFile, deleteFile} 