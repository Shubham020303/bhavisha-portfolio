/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			colors: {
				'primary': '#F1EEE7',
				'secondary': '#9B7956',
				'blackish': '#272625',
			},
		},
		fontFamily: {
			"Raleway": ["Raleway", "sans-serif"],
			"Open-Sans": ["Open Sans", "sans-serif"]
		},
	},
	plugins: [],
}