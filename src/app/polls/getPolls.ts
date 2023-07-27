import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function disconnectPrisma() {
    await prisma.$disconnect();
}

async function getPolls() {
    return await prisma.poll.findMany({
        include: { votes: { include: { user: true } } },
    });
}

export { getPolls };
