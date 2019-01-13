// postcss.config.js
module.exports = {
	plugins: {
		'@csstools/postcss-sass': {},
		'autoprefixer': {},
		'cssnano': {
			preset: 'default',
		}
	}
}
