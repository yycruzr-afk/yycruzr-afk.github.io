/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector', // <-- ESTA ES LA LÍNEA CLAVE. Si usas una versión vieja (v3.0 a v3.3), escribe 'class' en su lugar.
    content: ["./src/**/*.{html,js}"], 
    theme: {
        extend: {},
    },
    plugins: [],
}