import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: "Poll: %s | A Polling App",
        default: "Poll | A Polling App",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
}
