import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        template: "%s | A Polling App",
        default: "Poll | A Polling App",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header className="mb-10 w-max space-y-4">
                <h1>A Polling App</h1>
                <div className="grid grid-cols-2 w-full gap-4">
                    <Link href="/polls" className="btn btn-block btn-primary">
                        see all polls
                    </Link>
                    <Link
                        href="/polls/create"
                        className="btn btn-block btn-secondary btn-outline"
                    >
                        create a poll
                    </Link>
                </div>
            </header>
            <div className="w-4/5 flex flex-col justify-center items-center gap-4">
                {children}
            </div>
        </>
    );
}
