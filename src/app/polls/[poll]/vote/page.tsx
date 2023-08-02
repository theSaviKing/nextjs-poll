import { getPollByID } from "../../dbClient";
import Link from "next/link";

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
                action="./cast"
                className="rounded-lg p-8 bg-base-200 form-control space-y-4"
            >
                <label htmlFor="vote" className="label">
                    <span>Your answer</span>
                </label>
                <input
                    type="text"
                    id="vote"
                    name="vote"
                    className="input input-primary"
                    required
                />
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="label">
                            <span>Email</span>
                        </label>
                        <input
                            type="text"
                            className="input"
                            placeholder="john.smith@gmail.com"
                            required
                            id="email"
                            name="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="label">
                            <span>Name</span>
                        </label>
                        <input
                            type="text"
                            className="input"
                            placeholder="John Smith"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Cast my vote
                </button>
            </form>
            <Link href="." className="btn w-96 btn-outline">
                back to poll
            </Link>
        </>
    );
}
