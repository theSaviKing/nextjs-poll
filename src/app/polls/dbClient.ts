"use server";

import { Prisma, PrismaClient, PollType } from "@prisma/client";

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

async function submitVote(
    pollId: number,
    vote: string,
    email: string,
    name?: string
) {
    let newVote = await prisma.vote.create({
        data: {
            vote: vote,
            poll: {
                connect: {
                    id: pollId,
                },
            },
            user: {
                connectOrCreate: {
                    where: {
                        email: email,
                    },
                    create: {
                        email: email,
                        name: name,
                    },
                },
            },
        },
    });
    disconnectPrisma();
    return newVote;
}

async function createPoll(
    question: string,
    pollType: PollType,
    choices?: string[]
) {
    let newPoll = await prisma.poll.create({
        data: {
            question: question,
            type: pollType,
            choices: choices,
        },
    });
    disconnectPrisma();
    return newPoll;
}

export { getAllPolls, getPollByID, submitVote, createPoll };
