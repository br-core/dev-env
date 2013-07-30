var path = require("path");
var lrSnippet = require("grunt-contrib-livereload/lib/utils").livereloadSnippet;
var folderMount = function folderMount(connect, point) {
	return connect.static(path.resolve(point));
};

module.exports = function(grunt) {
	// -- Config -------------------------------------------------------------------
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		// -- Jshint Config --------------------------------------------------------
		jshint: {
			js: ["Gruntfile.js", "js/**/*.js"],
			
			options: {
				jshintrc: ".jshintrc",
				force: true,
				//ignores: ["js/test.js"],
			}
		},
		
		// -- Cssmin Config --------------------------------------------------------
		cssmin: {
			minify: {
				expand: true,
				cwd: ".",
				src: ["css/**/*.css", "!*.min.css"],
				dest: "release/",
				ext: ".min.css"
			},
		},
		
		// -- Connect Config -------------------------------------------------------
		connect: {
			livereload: {
				options: {
					port: 1234,
					middleware: function(connect, options) {
						return [lrSnippet, folderMount(connect, ".")];
					}
				}
			},
		},
		
		// -- Regarde(watch) Config --------------------------------------------------------
		regarde: {
			html: {
				files: ["index.html", "html/**/*.html"],
				tasks: ["livereload"]
			},
			
			js: {
				files: ["Gruntfile.js", "js/**/*.js"],
				tasks: ["jshint"]
			},
			
			css: {
				files: ["css/**/*.css"],
				tasks: ["cssmin"]
			}
		},
	});

	// -- Main Tasks ---------------------------------------------------------------

	// Load the plugins.
	grunt.loadNpmTasks("grunt-regarde");
	grunt.loadNpmTasks("grunt-contrib-livereload");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-cssmin");

	// Default task.
	grunt.registerTask("default", ["livereload-start", "connect", "regarde", "jshint", "cssmin"]);
};
