const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");

function style() {
  return gulp
    .src("./scss/**/index.scss")
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./styles"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./scripts/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
