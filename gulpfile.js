const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const pug = require("gulp-pug");

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./views/**/*.pug", html);
  gulp.watch("./styles/scss/**/*.scss", style);
  gulp.watch("./scripts/**/*.js", browserSync.reload);
}

function style() {
  return gulp
    .src("./styles/scss/**/index.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./styles/css"))
    .pipe(browserSync.stream());
}

function html() {
  return gulp
    .src("views/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("./"))
    .on("end", browserSync.reload);
}

// function watch() {
//   browserSync.init({
//     server: {
//       baseDir: "./",
//     },
//   });
//   gulp.watch("./styles/scss/**/*.scss", style);
//   gulp.watch("./*.html").on("change", browserSync.reload);
//   gulp.watch("./scripts/**/*.js").on("change", browserSync.reload);
// }
exports.style = style;
exports.html = html;
exports.watch = watch;
