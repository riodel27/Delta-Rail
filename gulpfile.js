var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('server', function(){
	browserSync.init({
		server: './'
	});
});

gulp.task('sass', function(){
	return gulp.src('app/scss/*.scss')
		.pipe(sass({
			includePaths: ['./bower_components/foundation-sites/scss']}))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['server'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('*.html').on('change', reload);
});
