module.exports = function (grunt) {

    grunt.initConfig({
        concat: {          
          js: {
            src: [
                'src/js/intro.js', 
                'src/js/project.js'
            ],
            dest: 'dist/js/script.js',
          },
          css: {
            src: [
                'src/css/1.css', 
                'src/css/2.css'
            ],
            dest: 'dist/css/style.css',
          },
        },
        uglify: {
          my_target: {
            files: {
              'dist/js/script.min.js': [
                'src/js/intro.js', 
                'src/js/project.js'
              ]
            }
          }
        },
        watch: {
            scripts: {
              files: [
                  'src/js/**/*.js', 
                  'src/css/**/*.css'
                ],
              tasks: ['concat', 'uglify']
            },
          },
      });
      
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.registerTask('default', ['concat', 'uglify', 'watch']);
}