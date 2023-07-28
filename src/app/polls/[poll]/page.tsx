import { Metadata } from "next";
import { getPollByID } from "../dbClient";

export async function generateMetadata({
    params,
}: {
    params: { poll: string };
}) {
    const pollId = Number(params.poll);
    const poll = await getPollByID(pollId);
    return {
        title: poll.question,
    };
}

export default async function Poll({ params }: { params: { poll: string } }) {
    const pollId = Number(params.poll);
    // console.log("pollId = ", pollId, typeof pollId);
    const poll = await getPollByID(pollId);
    return (
        <div className="space-y-8 flex flex-col justify-center items-center">
            <header className="w-max space-y-4">
                <h1>A Polling App</h1>
                <a href="/polls" className="btn btn-block">
                    see all polls
                </a>
            </header>
            <main className="flex flex-col gap-6">
                <p className="text-4xl text-secondary">{poll.question}</p>
                <div className="flex gap-2">
                    {poll.votes.map((vote) => (
                        <div className="p-2 bg-base-200 border border-accent/50 rounded">
                            <p className="font-medium">{vote.vote}</p>
                            <p className="italic opacity-75">
                                {vote.user.name == null
                                    ? vote.user.email
                                    : vote.user.name}
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
