import { getPollByID } from "../dbClient";
import { PrismaClient } from "@prisma/client";
import CreatePoll from "./createPoll";

export async function generateMetadata() {
    return {
        title: "Create Poll",
    };
}

export default async function Create() {
    return <CreatePoll />;
}
