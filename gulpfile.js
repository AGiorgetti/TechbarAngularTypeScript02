var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var typescript = require("typescript");
var tslint = require("gulp-tslint");
var path = require("path");
var inject = require("gulp-inject");
//var angularFilesort = require("gulp-angular-filesort");

var paths = {
    src: "./src/", // actual source code
    build: "./build/", // compilation artifacts (tmp)
    dist: "./dist/" // distribution files
}

// define some compiler options
var tsOptions = {
    typescript: typescript, // use the local copy of the compiler
    noImplicitAny: false,
    target: "es5",
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    experimentalAsyncFunctions: true,
    // noExternalResolve: true, // external resolution of files is allowed, the previous commet is not valid for ng2: we provide all the file by ourselves, no <reference> is needed
    module: "system", //"AMD" // "commonjs" // values ["AMD", "commonjs", "UMD", "system"]
    moduleResolution: "node"
};

var tsFiles = ["typings/browser/**/*.d.ts", paths.src + "**/*.ts",];
var source = gulp.src(tsFiles);

gulp.task("tslint", function() {
    return source
        .pipe(tslint())
        .pipe(tslint.report("verbose"));
});

// build with sourcemaps support

gulp.task("build-ts", ["copy-templates", "copy-js", "compile-ts"]);

gulp.task("compile-ts", function() {
    var tsResult = source
        .pipe(sourcemaps.init())
        .pipe(ts(tsOptions));
    return tsResult.js
        //.pipe(sourcemaps.write(".", {includeContent: true})) // sourcemaps will be generated on an external file
        //.pipe(sourcemaps.write()) // sourcemap added to the source file (does not work either works with vscode debugger)
        .pipe(sourcemaps.write(".", { // allow VSCode debugger to work: https://github.com/ivogabe/gulp-typescript/issues/201
            // Return relative source map root directories per file.
            sourceRoot: function(file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd) + "/../src";  // will probide the right location of the source files relative to the build folder
            }
        }))

        /*
        .pipe(sourcemaps.write({ // allow VSCode debugger to work: https://github.com/ivogabe/gulp-typescript/issues/201
          // Return relative source map root directories per file.
          sourceRoot: function (file) {
            var sourceFile = path.join(file.cwd, file.sourceMap.file);
            return path.relative(path.dirname(sourceFile), file.cwd); // + "/../src";  // will probide the right location of the source files relative to the build folder
          }
        }))
        */
        .pipe(gulp.dest(paths.build));
});

gulp.task("watch", function() {
    return gulp.watch(tsFiles, ['build-ts']);
});

gulp.task("copy-js", function() {
    return gulp.src(paths.src + "**/*.js")
        .pipe(gulp.dest(paths.build));
});

gulp.task("copy-templates", function() {
    return gulp.src(paths.src + "**/*.html")
        .pipe(gulp.dest(paths.build));
});

// https://github.com/klei/gulp-inject/wiki/Clarifying-injected-paths
gulp.task("inject", ["compile-ts"], function() {
    return gulp.src(paths.src + "index.html")
        .pipe(inject(
            gulp.src([paths.build + "**/*.js"]) //.pipe(angularFilesort())
            , { relative: true }))
        .pipe(gulp.dest(paths.build));
});