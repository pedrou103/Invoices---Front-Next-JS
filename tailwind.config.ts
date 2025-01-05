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
        'my-dark': '#1E1E26',
      },
    },
  },
  safelist: [
    'bg-yellow-200', 'text-yellow-500',
    'bg-orange-200', 'text-orange-500',
    'bg-purple-200', 'text-purple-500',
    'bg-green-200', 'text-green-500',
    'bg-pink-200', 'text-pink-500',
    'bg-red-200', 'text-red-500',
    'bg-indigo-200', 'text-indigo-500',
    'bg-gray-200', 'text-gray-500',
  ],
  plugins: [],
} satisfies Config;
