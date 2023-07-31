import { submitVote } from "@/app/polls/dbClient";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest, {params}: {params: {poll:string}}) {
    const pollId = Number(params.poll);
    const formData = await request.formData()
    let [vote, email, name] = [formData.get('vote'), formData.get('email'), formData.get('name')]
    const submittedVote = await submitVote(pollId, vote, email, name);
    console.log("Vote successfully submitted:",submittedVote)
    const redirLoc = `/polls/${pollId}`;
    console.log("Redirecting to", redirLoc)
    redirect(redirLoc)
}