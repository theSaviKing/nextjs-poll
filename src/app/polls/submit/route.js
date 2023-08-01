import { createPoll } from "@/app/polls/dbClient";
import { redirect } from "next/navigation";

export async function POST(request, { params }) {
    const formData = await request.formData();
    let [question, pollType, choices] = [
        formData.get("question"),
        formData.get("type"),
        formData.get("choices"),
    ];
    const createdPost = await createPoll(question);
    console.log("Post successfully created:", createdPost);
}

export async function GET(request, { params }) {
    console.log("Redirecting to /polls...");
    redirect("/polls");
}
