/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}", // Adjust based on your Vite setup
  ],
  theme: {
    extend: {
        font:{
            '10xl':['9rem',{lineHeight:'1.2'}]
        },
    
    },
  },
  plugins: [],
}