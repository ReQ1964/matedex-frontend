import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        slideDown: {
          from: { height: '0px' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0px' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        'slide-in-right':
          'slide-in-right 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
        'slide-out-right':
          'slide-out-right 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) both',
        slideDown: 'slideDown 200ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 200ms cubic-bezier(0.87, 0, 0.13, 1)',
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
