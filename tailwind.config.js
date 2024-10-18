/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/flowbite-react/**/*.js',
];
export const theme = {
  extend: {
    colors: {
      warning: "hsl(var(--warning))",
      "warning-foreground": "hsl(var(--warning-foreground))",
    }
  }
};
export const plugins = [
  require('@tailwindcss/typography'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  require('flowbite/plugin'),
];
