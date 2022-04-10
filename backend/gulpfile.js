const gulp = require("gulp")

const css = () => {
    const postCSS = require("gulp-postcss")
    var sass = require('gulp-sass')(require('sass'));
    const minify = require("gulp-csso")
    sass.compiler = require("node-sass")
    return gulp
        .src("assets/scss/styles.scss", { allowEmpty: true })
        .pipe(sass().on("error", sass.logError)) // work with sass
        .pipe(postCSS([                          // Plugins for postCSS (sass to css)
            require("tailwindcss"),
            require("autoprefixer")
        ]))
        .pipe(minify())                          // minify the output
        .pipe(gulp.dest("static/css"));          // put the results to static.css
}

exports.default = css;