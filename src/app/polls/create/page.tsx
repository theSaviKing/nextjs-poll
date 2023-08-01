import { getPollByID } from "../dbClient";
import { PrismaClient } from "@prisma/client";
import CreatePoll from "./PollChoices";

export async function generateMetadata() {
    return {
        title: "Create Poll",
    };
}

export default async function Create() {
    return <CreatePoll />;
}
