import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function prismaWrapper(func: Function) {
    func(prisma)
        .then(async () => {
            await prisma.$disconnect();
        })
        .catch(async (e: Error) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        });
}

prismaWrapper(async (prisma: PrismaClient) => {
    const users = await prisma.user.findMany({
        include: {
            votes: true,
        },
    });
});

export default prismaWrapper;
