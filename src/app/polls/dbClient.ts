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

async function getPollByID(pollId: number) {
    console.log("pollId =", pollId, typeof pollId);
    let data = await prisma.poll.findUniqueOrThrow({
        where: {
            id: pollId,
        },
        include: {
            votes: {
                include: {
                    user: true,
                },
            },
        },
    });
    disconnectPrisma();
    return data;
}

async function vote(email: string, vote: string, name?: string) {}

export { getAllPolls, getPollByID, vote };
