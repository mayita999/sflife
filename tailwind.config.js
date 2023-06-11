/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: ['retro'],
		darkTheme: 'retro'
	}
};
