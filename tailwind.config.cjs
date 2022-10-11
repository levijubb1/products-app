/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
		// themes: [
		// 	"dark",
		// 	{
		// 		mytheme: {
		// 			primary: '#6419E6',
		// 			secondary: '#D926A9',
		// 			accent: '#1FB2A6',
		// 			neutral: '#191D24',
		// 			'base-100': '#2A303C',
		// 			info: '#3ABFF8',
		// 			success: '#36D399',
		// 			warning: '#FBBD23',
		// 			error: '#F87272'
		// 		}
		// 	},
		// 	'light'
		// ]

		// themes: ['corporate']
	},
	plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')]
	// plugins: [],
};
