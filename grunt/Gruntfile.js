module.exports = function (grunt) {

    grunt.initConfig({
        concat: {          
          js: {
            src: [
                'src/js/**/*.js'                
            ],
            dest: 'dist/js/script.js',
          },
          css: {
            src: [
                'src/css/**/*.css'
            ],
            dest: 'dist/css/style.css',
          },
        },
        uglify: {
          my_target: {
            files: {
              'dist/js/script.min.js': [
                'src/js/**/*.js'          
              ]
            }
          }
        },
        cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'dist/css/style.min.css': [
                'src/css/**/*.css'
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
              tasks: ['concat', 'uglify', 'cssmin']
            },
          },
      });
      
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.registerTask('default', ['concat', 'uglify', 'watch']);
}