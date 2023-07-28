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
        title: `Poll: ${poll.question}`,
    };
}

export default async function Poll({ params }: { params: { poll: string } }) {
    const pollId = Number(params.poll);
    const poll = await getPollByID(pollId);
    return (
        <main className="flex flex-col gap-12">
            <p className="text-4xl text-secondary">{poll.question}</p>
            <div className="flex gap-2">
                {poll.votes.map((vote) => (
                    <div className="p-2 bg-base-200 border border-accent/50 rounded">
                        <p className="font-medium">{vote.vote}</p>
                        <p className="italic opacity-75">
                            {vote.user.name == null ? (
                                vote.user.email
                            ) : (
                                <>
                                    <span>{vote.user.name}&nbsp;</span>
                                    <span className="font-thin">{`(${vote.user.email})`}</span>
                                </>
                            )}
                        </p>
                    </div>
                ))}
            </div>
            <a href={`${pollId}/vote`} className="btn btn-secondary btn-wide">
                vote
            </a>
        </main>
    );
}
