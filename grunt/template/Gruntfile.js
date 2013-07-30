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
			js: {
				files: ["Gruntfile.js", "src/**/*.js", "spec/**/*.js", "js/**/*.js"],
				tasks: ["jshint", "jasmine"],
				spawn: false
			},
			
			css: {
				files: ["css/**/*.css"],
				tasks: ["cssmin"]
			},
			
			html: {
				files: ["index.html", "html/**/*.html", "_SpecRunner.html"],
				tasks: ["livereload"]
			},
		},
	});
	
	// Load the plugins.
	grunt.loadNpmTasks("grunt-contrib-livereload");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-jasmine");
	grunt.loadNpmTasks("grunt-regarde");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	
	// Default task(s).
	grunt.registerTask("default", "", function (){
		grunt.option("force", true);
		grunt.task.run(["livereload-start", "connect", "regarde", "jasmine", "jshint", "cssmin"]);
	});
	
	grunt.registerTask("test", ["jasmine"]);
};
