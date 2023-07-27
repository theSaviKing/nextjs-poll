/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
                serif: [
                    "var(--font-fraunces)",
                    ...defaultTheme.fontFamily.serif,
                ],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["luxury"],
    },
};
