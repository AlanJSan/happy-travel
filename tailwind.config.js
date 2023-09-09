/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			backgroundImage: {
				// 'mobile': "url('/assets/home/background-home-mobile.jpg')",
				// 'tablet': "url('/assets/home/background-home-tablet.jpg')",
				'desktop': "url('./src/assets/banner-desktop.jpg')",
			}
		},
  },
  plugins: [],
}

