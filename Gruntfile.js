module.exports = function(grunt) {

    "use strict";

    grunt.initConfig({

        jasmine: {
            main: {
                src: "source/shake-n-bake.js",
                options: {
                    specs: ["tests/**/*.js"]
                }
            }
        },

        jshint: {
            source: [
                "source/**/*.js"
            ]
        }

    });

    require("load-grunt-tasks")(grunt);

    grunt.registerTask("default", ["test"]);

    grunt.registerTask("test", [
        "jshint:source",
        "jasmine:main"
    ]);

};
