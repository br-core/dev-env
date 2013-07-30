var path = require("path");
var lrSnippet = require("grunt-contrib-livereload/lib/utils").livereloadSnippet;
var folderMount = function folderMount(connect, point) {
	return connect.static(path.resolve(point));
};

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		// -- Jasmine Config -------------------------------------------------------
		jasmine : {
			src : "src/**/*.js",
			options : {
				specs : "spec/**/*.js",
				outfile : "_SpecRunner.html",
				keepRunner : true,
				force: true,
			}
		},
		
		// -- Jshint Config --------------------------------------------------------
		jshint: {
			js: ["Gruntfile.js", "js/**/*.js", "src/**/*.js"],
			
			options: {
				jshintrc: ".jshintrc",
				force: true,
				//ignores: ["js/test.js"],
			}
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
			js: {
				files: ["Gruntfile.js", "src/**/*.js", "spec/**/*.js", "js/**/*.js"],
				tasks: ["jshint", "jasmine"],
				spawn: false
			},
			report: {
				files: "_SpecRunner.html",
				tasks: ["livereload"],
			},
		},
	});
	
	grunt.loadNpmTasks("grunt-contrib-livereload");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-jasmine");
	grunt.loadNpmTasks("grunt-regarde");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	
	grunt.registerTask("default", "", function (){
		grunt.option("force", true);
		grunt.task.run(["livereload-start", "connect", "regarde", "jasmine", "jshint"]);
	});
	
	grunt.registerTask("test", ["jasmine"]);
};