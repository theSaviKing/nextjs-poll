import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const fraunces = Fraunces({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fraunces",
});

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
            <body
                className={[
                    inter.variable,
                    fraunces.variable,
                    "w-full",
                    "min-h-screen",
                    "flex",
                    "justify-center",
                    "items-center",
                    "select-none",
                ].join(" ")}
            >
                {children}
            </body>
        </html>
    );
}
