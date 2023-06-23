/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.js',
		'./pages/**/*.js',
		"./public/**/*.html",
	],
	theme: {
		extend: {
			colors:{
				primaryColor : '#4F4F4F',
				tabsActiveColor: '#7A0BF2',
				slidderBg : '#D3CEEC',
				highlightText : '#7A0BF2',
				borderHighlight : '#D9D9D9',
				borderColor: '#F2F2F2'
			},
			animation: {
				fade: 'fadeOut 5s ease-in-out',
			  },
			  keyframes: theme => ({
				fadeOut: {
				  '0%': { backgroundColor: theme('colors.red.300') },
				  '100%': { backgroundColor: theme('colors.transparent') },
				},
			  }),	
		},
		screens: {
			'xs' : {'max':'575px'},
			'sm': {'min': '576px', 'max': '767px'},
			'md': {'min': '768px', 'max': '991px'},
			
			'lg': {'min': '992px', 'max': '1199px'},
			
			'xl': {'min': '1200px'},
		}
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'autoprefixer' )
	]
}