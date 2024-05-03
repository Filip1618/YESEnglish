/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        ".src/utils/fontsPresets.json",
        "./index.html",
    ],
    theme: {
        fontSize: {
            "sm": "0.83em",
            "base": "1em",
            "h5": "1.2em",
            "h4": "1.44em",
            "h3": "1.73em",
            "h2": "2.07em",
            "h1": "2.49em",
        },
        extend: {
            aspectRatio: {
                "golden-horizontal": "1.618 / 1",
                "golden-vertical": "1 / 1.618",
            },
            gridTemplateRows: {
                14: "repeat(14, minmax(0, 1fr))",
            },
            screens: {
                sm: { max: "767px" },
                // => @media (min-width: 640px and max-width: 767px) { ... }

                md: { max: "1023px" },
                // => @media (min-width: 768px and max-width: 1023px) { ... }

                lg: { max: "1279px" },
                // => @media (min-width: 1024px and max-width: 1279px) { ... }

                xl: { max: "1535px" },
                // => @media (min-width: 1280px and max-width: 1535px) { ... }
            },
        },

        container: {
            center: true,
        },
        colors: {
            night: {
                DEFAULT: "#0b090a",
                100: "#020202",
                200: "#040404",
                300: "#070606",
                400: "#090708",
                500: "#0b090a",
                600: "#41353b",
                700: "#77616c",
                800: "#a7939d",
                900: "#d3c9ce",
            },
            eerie_black: {
                DEFAULT: "#161a1d",
                100: "#040506",
                200: "#090a0c",
                300: "#0d1011",
                400: "#121517",
                500: "#161a1d",
                600: "#3d4951",
                700: "#657786",
                800: "#96a5b0",
                900: "#cbd2d8",
            },
            cornell_red: {
                DEFAULT: "#ba181b",
                100: "#250505",
                200: "#4a0a0b",
                300: "#6f0e10",
                400: "#941315",
                500: "#ba181b",
                600: "#e32a2d",
                700: "#ea5f62",
                800: "#f19496",
                900: "#f8cacb",
            },
            platinum: {
                DEFAULT: "#e7e7e7",
                100: "#2e2e2e",
                200: "#5d5d5d",
                300: "#8b8b8b",
                400: "#bababa",
                500: "#e7e7e7",
                600: "#ededed",
                700: "#f1f1f1",
                800: "#f6f6f6",
                900: "#fafafa",
            },
        },

        boxShadow: {
            "image-shadow": "4px 4px 13px -3px rgba(66, 68, 90, 1)",
            base: "2px 2px 12px -3px rgba(66, 68, 90, 1)",
        },
        fontFamily: {
            "poppins": ["Poppins", "sans-serif"],
            "libre-baskerville": ["Libre Baskerville", "serif"]
        },
    },

    plugins: ["prettier-plugin-tailwindcss"],
};
