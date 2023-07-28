import { getAllPolls } from "./dbClient";
import Poll from "./poll";

export default async function Polls() {
    let pollData = await getAllPolls();
    pollData.sort((a, b) => {
        return b.votes.length - a.votes.length;
    });
    return (
        <div className="space-y-8">
            <header>
                <h1>A Polling App</h1>
            </header>
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
        </div>
    );
}
