/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				yellow: "#f4d04e",
			},
			boxShadow: {
				card: "8px 8px 0px black",
			},
		},
	},
	plugins: [],
};
