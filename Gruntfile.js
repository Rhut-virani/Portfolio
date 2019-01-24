module.exports = function (grunt) {
    grunt.initConfig({
        postcss: {
          options: {
            map: true, // inline sourcemaps
      
            // or
            map: {
                inline: false, // save all sourcemaps as separate files...
                annotation: 'dist/css/maps/' // ...to the specified directory
            },
      
            processors: [
              require('pixrem')(), // add fallbacks for rem units
              require('autoprefixer')({browsers: 'last 3 versions'}), // add vendor prefixes
              // require('cssnano')() // minify the result
            ]
          },
          dist: {
            src: 'style.css',
            dest: 'build/style.css'
          }
        }
      });
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-watch');
};