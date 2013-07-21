module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),

    watch: {
      scss: {
        files: ['sass/**/*.scss'],
        tasks: 'scss'
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

    sass: {
      build: {
        files : [
          {
            src : ['sass/**/*.scss', '!**/_*.scss'],
            cwd : 'scss',
            dest : 'css',
            ext : '.css',
            expand : true
          }
        ],
        options : {
          style : 'expanded'
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8888,
          base: './'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('scss', ['sass']);
  grunt.registerTask('dev', ['connect', 'watch']);

};