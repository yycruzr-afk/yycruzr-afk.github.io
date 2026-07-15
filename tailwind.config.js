/** @type {import('tailwindcss').Config} */
module.exports = {
  // Aquí le dices a Tailwind dónde buscar tus archivos para aplicar las clases
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue,svelte,astro,html}",
    ],
    theme: {
        extend: {}, // Aquí puedes añadir tus propios colores, fuentes, etc.
    },
    plugins: [],
}