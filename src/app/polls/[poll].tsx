import { useRouter } from "next/router";
import { getPollByID } from "./dbClient";

export default async function Poll() {
    const pollId = Number(useRouter().query.poll);
    const pollData = await getPollByID(pollId);
    return (
        <div>
            <header>
                <h1>A Polling App</h1>
            </header>
        </div>
    );
}
