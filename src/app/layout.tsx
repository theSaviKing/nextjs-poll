import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "A Polling App",
    description: "A simple app for making and voting on polls",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="icon.png" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
