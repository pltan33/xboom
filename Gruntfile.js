module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

        watch: {
            html: {
                files: ['js/src/**/*.html'],
                tasks: 'templates'
            },
            scss: {
                files: ['sass/**/*.scss'],
                tasks: 'scss'
            },
            js: {
                files: ['js/src/**/*.js'],
                tasks: 'compile'
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                  // 'js/src/**/*.html',
                  'index.html',
                  'css/{,*/}*.css',
                  'js/dist/{,*/}*.js'
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
        },

        handlebars: {
            compile: {
                options: {
                    namespace: "XBOOMTemplates"
                },
                files: {
                    "js/dist/templates.min.js": ["js/src/**/*.html"]
                }
            }
        },

        'images-convert': {
            jpgresize: {
                imageDirectory: 'images',
                files: 'images/*.jpg',
                destination: 'tmp/',
                options: {
                    resize: '300x300'
                }
            }   
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-images');

    // Default task
    grunt.registerTask('default', ['sass', 'compile', 'handlebars']);
    grunt.registerTask('scss', ['sass']);
    grunt.registerTask('templates', ['handlebars', 'compile']);
    grunt.registerTask('compile', ['preprocess']);
    grunt.registerTask('dev', ['connect', 'watch']);

};


