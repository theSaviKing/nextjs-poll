import { Metadata } from "next";
import { getAllPolls } from "./dbClient";

export const metadata: Metadata = {
    title: {
        absolute: "All Polls | A Polling App",
    },
};

export default async function Polls() {
    let pollData = await getAllPolls();
    pollData.sort((a, b) => {
        return b.votes.length - a.votes.length;
    });
    return (
        <main className="grid grid-cols-3 w-4/5 gap-4 mx-auto">
            {pollData.map((poll) => (
                <a
                    href={`polls/${poll.id}`}
                    className="p-4 border border-primary/50 rounded bg-base-200 grid gap-2"
                >
                    <p className="font-bold text-xl">{poll.question}</p>
                    <p>
                        {poll.votes.length} vote
                        {poll.votes.length == 1 ? "" : "s"}
                    </p>
                </a>
            ))}
        </main>
    );
}
