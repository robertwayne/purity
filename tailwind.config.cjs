module.exports = {
    content: ["templates/**/*.html"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                body: ["PT Sans"],
                heading: ["Nunito"],
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
}
