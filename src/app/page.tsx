import Link from "next/link";

export default function Home() {
    return (
        <header className="gap-8 w-max">
            <h1>A Polling App</h1>
            <Link href="/polls" className="btn btn-block">
                check out the polls!
            </Link>
        </header>
    );
}
