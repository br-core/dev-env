module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		jasmine : {
			src : "src/**/*.js",
			options : {
				specs : "spec/**/*.js"
			}
		},
		
		//watch: {
        //    files: "**/*.js",
        //    tasks: ["jasmine"]
        //}
	});
	grunt.loadNpmTasks("grunt-contrib-jasmine");
	grunt.loadNpmTasks("grunt-contrib-watch");
	
	//grunt.registerTask("default", ["watch", "jasmine"]);
	grunt.registerTask("default", ["jasmine"]);
};