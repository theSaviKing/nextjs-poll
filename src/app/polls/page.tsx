import { Metadata } from "next";
import { getAllPolls } from "./dbClient";
import Link from "next/link";

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
                <Link
                    href={`polls/${poll.id}`}
                    className="p-4 border border-primary/50 rounded bg-base-200 grid gap-2"
                >
                    <p className="font-bold text-xl">{poll.question}</p>
                    <p>
                        {poll.votes.length} vote
                        {poll.votes.length == 1 ? "" : "s"}
                    </p>
                </Link>
            ))}
            {pollData.length == 0 ? (
                <div className="text-center col-span-full space-y-4">
                    <h2 className="text-4xl font-light">No polls yet...</h2>
                    <p className="uppercase text-secondary text-lg font-bold">
                        Maybe you should make one!
                    </p>
                </div>
            ) : (
                <></>
            )}
        </main>
    );
}
