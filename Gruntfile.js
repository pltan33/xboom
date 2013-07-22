module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

        watch: {
            scss: {
                files: ['sass/**/*.scss'],
                tasks: 'scss'
            },
            js: {
                files: ['js/**/*.js'],
                tasks: 'compile'
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                  '**/*.html',
                  'css/{,*/}*.css',
                  'js/{,*/}*.js'
                ]
            }
        },

        connect: {
            server: {
                options: {
                    port: 8888,
                    base: './'
                }
            }
        },

        preprocess : {
            multifile : {
                files : {
                    'js/dist/xboom.min.js'   : 'js/src/xboom.js',
                    'js/dist/xbmc.min.js'   : 'js/src/xbmc/xbmc.js'
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/screen.css': 'sass/screen.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task
    grunt.registerTask('default', ['sass', 'compile']);
    grunt.registerTask('scss', ['sass']);
    grunt.registerTask('compile', ['preprocess']);
    grunt.registerTask('dev', ['connect', 'watch']);

};