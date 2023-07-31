import { Prisma, PrismaClient } from "@prisma/client";

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

async function submitVote(pollId: number, vote: string, email: string, name?: string, include = {}) {
    let newVote: Prisma.VoteCreateInput = {
        vote: vote,
        pollId: pollId,
    }
    const userIfExists = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    let user, userId;
    if (userIfExists == null) {
        user = {create: {
            email: email
        }}
        if (name != null) {
            user.create.name = name
        }
    } else {
        userId = userIfExists.id
    }
    userId == null ? newVote.user = user : newVote.userId = userId
    return await prisma.vote.create({
            data: newVote,
            include: include
        });
}

export { getAllPolls, getPollByID, submitVote };
