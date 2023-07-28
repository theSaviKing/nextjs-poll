import { Metadata } from "next";

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
                <a href="/polls" className="btn btn-block">
                    see all polls
                </a>
            </header>
            <div className="w-4/5 flex flex-col justify-center items-center gap-4">
                {children}
            </div>
        </>
    );
}
