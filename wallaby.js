
module.exports = function (wallaby) {
    console.log(require('module').Module._nodeModulePaths(''));
    //process.env.NODE_PATH += ':' + require('path').join(wallaby.localProjectDir, 'node_modules');
    try {
        var mod = require('chai').expect;
        console.log(mod);
    }
    catch (e) {
        console.log('chai is not found...');
        console.log('process.cwd()', process.cwd());
    }

    return {
        files: [
            './**/*.ts',
            '!./tests/*.spec.ts',
        ],
        tests: [
            './tests/*.spec.ts',
        ],

        // tests: [
        //   'test/**/*Spec.js'
        // ]

        // for node.js tests you need to set env property as well
        // https://wallabyjs.com/docs/integration/node.html
        env: {
            type: 'node',
            //runner: 'C:/Program Files/nodejs/node.exe'
        },
        //debug: 'true',
        compilers: {
            './**/*.ts*': wallaby.compilers.typeScript({
                "experimentalDecorators": true,
                "emitDecoratorMetadata": true,
                "moduleResolution": "node",
                "types": [
                    "reflect-metadata"
                ],
                "lib": ["es6", "dom"],
            })
        },
        setup: function () {
           // global.expect = require('chai').expect;
        },
        testFramework: 'jasmine'
    };
};



