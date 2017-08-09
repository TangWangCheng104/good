//
var gulp = require("gulp");
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

//var minifyCss =require('gulp-minify-css');

gulp.task('jsTask2', function(){
	gulp.src('js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest/js'));
});
gulp.task('default', ['jsTask2']);




