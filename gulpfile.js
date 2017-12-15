'use strict';

//dependencies for build
var gulp = require('gulp');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');
var flatten = require('gulp-flatten')
//dependencies for build END
//dependencies for push
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
//dependencies for push END

//settings
var html = 'test/html';
//settings END
//build project
gulp.task('pug', function buildHTML() {
	return gulp.src('test/*.pug')
		.pipe( plumber() )
		.pipe( pug( { pretty: true } ) )
		.pipe( gulp.dest( html ) );
});
//build project END
//watchers
gulp.task('watch', function(){
	gulp.watch( 'test/**/*.pug', ['pug'] )
})
//watchers END