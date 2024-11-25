import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenish: {
          tuscan:'#576d2c',
          garden: '#254222',
          sunset:'#b9b26c',

        },
      },
    },
  },
  plugins: [],
} satisfies Config;
