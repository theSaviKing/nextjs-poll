import { getPolls } from "./getPolls";
import Poll from "./poll";

export default async function Polls() {
    let pollData = await getPolls();
    let polls = pollData.map((poll) => Poll(poll));
    return (
        <>
            <h1>A Polling App</h1>
            <main>{polls}</main>
        </>
    );
}
