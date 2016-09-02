module.exports = function(grunt) {
	grunt.initConfig({
		 concat: {
		 options: {
			 separator: '\r\n'
		 },
		 dist: {
			 src: ['styles/variables.scss',
			       'styles/style.scss',],
			 dest: 'styles/main.scss'
		 }
	 },
	 sass: {
		 dist: {
			 files: [{
				 expand: true,
				 cwd: 'styles',
				 src: ['*.scss'],
				 dest: 'styles',
				 ext: '.css'
			 }]
		 }
	 },
	watch: {
		 sass: {
			 files: ['styles/*.scss'],
			 tasks: ['concat','sass']
		 },
	 },
	 scsslint: {
    allFiles: [
      '*.scss',
    ],
    options: {
      bundleExec: true,
      config: '.scss-lint.yml',
      reporterOutput: 'scss-lint-report.xml',
      colorizeOutput: true
    },
  }
	})
	
	
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-scss-lint');

grunt.registerTask('default', ['concat'],['sass'], ['watch'],['scsslint']);
	
}

