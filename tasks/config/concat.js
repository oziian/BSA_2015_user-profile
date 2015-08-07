/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		css: {
			src: require('../pipeline').cssFiles,
			dest: '.tmp/public/concat/production.css'
		},
		js: {
			src: require('../pipeline').jsFiles,
			dest: '.tmp/public/concat/production.js'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
