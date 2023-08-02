import { createPoll } from "@/app/polls/dbClient";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    let [question, pollType, choices] = [
        formData.get("question") as string,
        formData.get("type") as string,
        formData.get("choices") as string,
    ];
    const createdPost = await createPoll(question, pollType, choices);
    console.log("Poll successfully created:", createdPost);
    const url = request.nextUrl.clone();
    url.pathname = "/polls";
    // redirect("/polls");
    return NextResponse.redirect(url);
}

export async function GET() {
    console.log("Redirecting to /polls...");
    redirect("/polls");
}
