import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'flamingo': {
          DEFAULT: '#EF4E35',
          50: '#FCE3DF',
          100: '#FBD3CC',
          200: '#F8B1A6',
          300: '#F59081',
          400: '#F26F5B',
          500: '#EF4E35',
          600: '#DB2C11',
          700: '#A7220D',
          800: '#731709',
          900: '#3F0D05',
          950: '#250703'
        },
        'gun': {
          DEFAULT: '#424160',
          50: '#9D9CBC',
          100: '#9190B4',
          200: '#7978A4',
          300: '#636291',
          400: '#535178',
          500: '#424160',
          600: '#2B2A3F',
          700: '#14141D',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'sin': {
          DEFAULT: '#FDB228',
          50: '#FFF3DE',
          100: '#FFECCA',
          200: '#FEDDA1',
          300: '#FECF79',
          400: '#FDC050',
          500: '#FDB228',
          600: '#EB9902',
          700: '#B37502',
          800: '#7C5001',
          900: '#442C01',
          950: '#281A00'
        },
        'titan': {
          DEFAULT: '#EBEBFE',
          50: '#FEFEFF',
          100: '#EBEBFE',
          200: '#B6B6FB',
          300: '#8080F9',
          400: '#4B4BF6',
          500: '#1515F3',
          600: '#0A0AC7',
          700: '#070791',
          800: '#05055C',
          900: '#020226',
          950: '#01010C'
        },
      },
      fontFamily: {
        'sans': "'DMSans', sans-serif",
      },
      backgroundImage: {
        'hero-bg': '/public/img/hero-bg.png'
      },
    },
  },
  plugins: [],
}
export default config
