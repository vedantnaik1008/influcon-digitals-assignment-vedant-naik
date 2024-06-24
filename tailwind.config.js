/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                hero_wave: "url('/image/hero-wave.png')",
            },
        },
        fontFamily: {
            playfair: ['Playfair Display', 'serif']
        },
        screens: {
            sm: '320px',
            md: '768px',
            lg: '992px',
            llg: '1150px',
            xl: '1280px',
            xxl: '1400px'
        }
    },
    plugins: []
};

