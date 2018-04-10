var gulp = require('gulp'),
    sass = require('gulp-sass');
	jade = require('gulp-jade');

gulp.task('sass', function() {
  return gulp.src(['src/sass/**/*.sass', 'src/sass/**/*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
  });

gulp.task('watch', function() {
  gulp.watch(['src/sass/**/*.sass', 'src/sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);

gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade()) 
        .pipe(gulp.dest('app/'));
});