module.exports = {
    content: ["templates/**/*.html"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                body: ["PT Sans"],
                heading: ["Nunito"],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        em: {
                            fontStyle: "italic",
                        },
                        pre: {
                            width: "100%",
                        },
                        "pre code::before": {
                            "padding-left": "unset",
                        },
                        "pre code::after": {
                            "padding-right": "unset",
                        },
                        code: {
                            color: theme("colors.gray.300"),
                            fontWeight: "bold",
                            "border-radius": "0.25rem",
                        },
                        "code::before": {
                            content: "```",
                            "padding-left": "0.25rem",
                        },
                        "code::after": {
                            content: "```",
                            "padding-right": "0.25rem",
                        },
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
}
