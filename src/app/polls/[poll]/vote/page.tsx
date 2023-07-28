import { Metadata } from "next";
import { getPollByID } from "../../dbClient";

export async function generateMetadata({
    params,
}: {
    params: { poll: string };
}) {
    const pollId = Number(params.poll);
    const poll = await getPollByID(pollId);
    return {
        title: `Vote: ${poll.question}`,
    };
}

export default async function Vote({ params }: { params: { poll: string } }) {
    const pollId = Number(params.poll);
    const poll = await getPollByID(pollId);
    return (
        <>
            <header className="flex flex-col gap-4">
                <h2 className="uppercase text-secondary font-bold text-2xl">
                    Cast your vote!
                </h2>
                <p className="text-4xl font-light">{poll.question}</p>
            </header>
            <form
                method="post"
                className="rounded-lg p-8 border-accent bg-base-200 form-control"
            >
                <label htmlFor="vote" className="label">
                    Your answer
                </label>
                <input
                    type="text"
                    id="vote"
                    name="vote"
                    className="input"
                    required
                />
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label htmlFor="email" className="label">
                            Email
                        </label>
                        <input type="text" className="input" />
                    </div>
                    <div>
                        <label htmlFor="name" className="label">
                            Name
                        </label>
                        <input type="text" className="input" />
                    </div>
                </div>
            </form>
            <a href="." className="btn w-96 btn-outline">
                back to poll
            </a>
        </>
    );
}
