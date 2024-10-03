/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1:"#1f74ff",
      },
      animation:{
        'infinite-rotate':'infinite-rotate 9s linear infinite',
      },
      keyframes:{
        'infinite-rotate':{
          from:{transform:'rotate(0deg)'},
          to:{transform:'rotate(360deg)'},
        },
      },
    },
  },
  plugins: [],
};
