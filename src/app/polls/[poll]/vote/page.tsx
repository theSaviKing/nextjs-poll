import { Metadata } from "next";

export async function generateMetadata({
    params,
}: {
    params: { poll: string };
}) {
    const pollId = Number(params.poll);
}

export default function Vote({ params }: { params: { poll: string } }) {
    return <div>{params.poll}</div>;
}
