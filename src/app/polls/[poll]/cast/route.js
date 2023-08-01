import { submitVote } from "@/app/polls/dbClient";
import { redirect } from "next/navigation";

export async function POST(request, { params }) {
    const pollId = Number(params.poll);
    const formData = await request.formData();
    let [vote, email, name] = [
        formData.get("vote"),
        formData.get("email"),
        formData.get("name"),
    ];
    const submittedVote = await submitVote(pollId, vote, email, name);
    console.log("Vote successfully submitted:", submittedVote);
    let redirLoc = `/polls/${pollId}`;
    redirLoc = "/polls";
    console.log("Redirecting to", redirLoc);
    redirect(redirLoc, "replace");
}

export async function GET(request, { params }) {
    let redirLoc = `/polls/${pollId}`;
    redirLoc = "/polls";
    console.log("Redirecting to", redirLoc);
    redirect(redirLoc);
}
