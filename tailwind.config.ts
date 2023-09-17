import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  //       'gradient-conic':
  //         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  //     },
  //   },
  // },
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: {
  //         cyan: "hsl(180, 66%, 49%)",
  //         darkVoilet: "hsl(257, 27%, 26%)",
  //       },
  //       secondary: {
  //         red: "hsl(0, 87%, 67%)",
  //       },
  //       neutral: {
  //         gray: "hsl(0, 0%, 75%)",
  //         grayTwo: "hsl(230, 25%, 95%)",
  //         grayishViolet: "hsl(257, 7%, 63%)",
  //         darkBlue: "hsl(255, 11%, 22%)",
  //         darkViolet: "hsl(260, 8%, 14%)",
  //       },
  //     },
  //   },
  // },

  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          darkVoilet: "hsl(257, 27%, 26%)",
        },
        secondary: {
          red: "hsl(0, 87%, 67%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          grayTwo: "hsl(230, 25%, 95%)",
          grayishViolet: "hsl(257, 7%, 63%)",
          darkBlue: "hsl(255, 11%, 22%)",
          darkViolet: "hsl(260, 8%, 14%)",
        },
      },
    },
  },
  plugins: [],
}
export default config
