import gulp from 'gulp';
import babel from 'gulp-babel';
import mocha from 'gulp-mocha';

gulp.task('transform', () => {
  gulp.src('./gulp/src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./gulp/dist'));
});

gulp.task('test', () => {
  gulp.src('./mocha/test/*.js', { read: false })
    .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('default', ['transform', 'test']);
