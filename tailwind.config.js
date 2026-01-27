/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0a0e27',
                secondary: '#1a1f3a',
                accent: {
                    DEFAULT: '#6366f1',
                    bright: '#818cf8',
                },
                gold: {
                    DEFAULT: '#D4AF37',
                    light: '#FFD700',
                    dark: '#B8860B',
                },
                green: {
                    DEFAULT: '#7CB342',
                    light: '#8BC34A',
                    dark: '#558B2F',
                },
                cyan: '#06b6d4',
                purple: '#a855f7',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Space Grotesk', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'float': 'float 20s infinite ease-in-out',
                'glow': 'glow 3s infinite ease-in-out',
                'fadeInUp': 'fadeInUp 1s ease-out',
                'fadeInDown': 'fadeInDown 1s ease-out',
                'slideInLeft': 'slideInLeft 0.8s ease-out',
                'slideInRight': 'slideInRight 0.8s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(50px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-50px, 50px) scale(0.9)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 8px #FFD700' },
                    '50%': { boxShadow: '0 0 18px #FFD700, 0 0 35px #D4AF37' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(100px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
}
