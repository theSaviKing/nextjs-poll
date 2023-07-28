import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function disconnectPrisma() {
    await prisma.$disconnect();
}

async function getAllPolls() {
    let data = await prisma.poll.findMany({
        include: { votes: { include: { user: true } } },
    });
    disconnectPrisma();
    return data;
}

async function getPollByID(id: number) {
    let data = await prisma.poll.findUnique({
        where: {
            id: id
        }
    })
    disconnectPrisma();
    return data;
}

export { getAllPolls, getPollByID };
