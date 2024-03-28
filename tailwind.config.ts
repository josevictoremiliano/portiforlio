import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/fundo1.png')",
      },
      colors: {
        "cenoura": "#dc362e",
        "acerola": "#d85338",
        "yellowmd": "#ffa54c",
        "redmd": "#dc362e",
        "cinzasm": "#1f1f1f"
      }
    },
  },
  plugins: [],
}
export default config
