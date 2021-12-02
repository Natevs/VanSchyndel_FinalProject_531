//configuration data  I do not fully understand what is happening here 
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    env: {
        dev: {
            NODE_ENV: 'development'
        },
        test: {
            NODE_ENV: 'test'
        },
        production: {
            NODE_ENV: 'production'
        }
    },
    //sytles output
    jshint: {
        options: {
            reporter: require('jshint-stylish'),
            esversion: 6
        },
        //will get additions, files to be checked
        all: ['Grunfile.js', 'config/*.js', 'index.js']
    },
    //nodemon task
    nodemon: {
        dev: { script: 'index.js' }
    }
});
//wrapper function
module.exports = function (grunt) {
    //grunt stuff happens here
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodemon');
    grunt.loadNpmTasks('grunt-env');

    //tasks
    grunt.registerTask('default', [
        'jshint',
        'env:dev',
        'nodemon'
    ]);
    grunt.registerTask('test', [
        'jshint',
        'env:test',
        'nodemon'
    ]);
    grunt.registerTask('production', [
        'env:dev',
        'nodemon'
    ]);
};
