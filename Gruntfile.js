module.exports = function (grunt) {
    grunt.loadNpmTasks('@lodder/grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        postcss: {
            options: {
                map: false, // Disable sourcemaps for production
                processors: [
                    require('autoprefixer')(), // add vendor prefixes
                    require('pixrem')(), // add fallbacks for rem units
                    require('cssnano')({
                        preset: 'default',
                    }), // minify the result
                ],
            },
            dist: {
                src: 'style.css',
                dest: 'dist/style.min.css',
            },
        },
        // Add this clean configuration
        clean: {
            dist: ['dist'], // This will clean the dist directory
        },
        copy: {
            main: {
                files: [
                    // Copy HTML
                    {
                        expand: true,
                        src: ['Index.html'],
                        dest: 'dist/',
                        rename: function (dest, src) {
                            return dest + 'index.html';
                        },
                    },
                    // Copy JS
                    { expand: true, src: ['script.js'], dest: 'dist/' },
                    // Copy helper directory
                    { expand: true, src: ['helper/**'], dest: 'dist/' },
                    // Copy all assets
                    { expand: true, src: ['assets/**'], dest: 'dist/' },
                ],
            },
        },
    });
    grunt.registerTask('build', ['clean:dist', 'postcss', 'copy']);
    grunt.registerTask('default', ['build']);
};

// grunt postcss
