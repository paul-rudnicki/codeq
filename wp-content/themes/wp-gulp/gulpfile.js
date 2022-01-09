/* requirements => */
require('es6-promise').polyfill();
/* <= requirements */

/* variables => */
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({
		pattern: '*'
	});

var config = require('./config.js');
// var configFTP = require('./config-ftp.json');
/* <= variables */

/* onError => */
var onError = function (err) {
	console.log('!ERROR:', plugins.util.colors.yellow(err.message));
	plugins.util.beep();
	this.emit('end');
};
/* <= onError */

/* sass => */
gulp.task('sass', require('./gulp-tasks/sass')(gulp, plugins, config.projectFolder, onError))
/* <= sass */

/* css => laczenie i kompresja plikow css-owych */
gulp.task('concatCss', require('./gulp-tasks/concatCss')(gulp, plugins, config.projectFolder, onError, config.files.styles))
/* <= css */

/* js => laczenie i kompresja plikow js-owych */
gulp.task('concatJs', require('./gulp-tasks/concatJs')(gulp, plugins, config.projectFolder, onError, config.files.scripts))
/* <= js */

/* watch => do przebudowania tak, by przy zmianie np. css kompilowal tylko css */
gulp.task('watch', require('./gulp-tasks/watch')(gulp, plugins, config.projectFolder, onError, config.proxy))
/* <= watch */

/* deploy => deploy wszystkich plików na serwer */
// gulp.task('deploy', require('./gulp-tasks/deploy')(gulp, plugins, config.projectFolder, configFTP))
/* <= deploy */

/* atf => kompilowanie pliku atf.sass do atf.php (style above-the-fold) */
gulp.task('atf', require('./gulp-tasks/atf')(gulp, plugins, config.projectFolder, onError))
/* <= atf */

/* imagemin => kompresja plików png, jpg, jpeg, gif  */
gulp.task('imagemin', require('./gulp-tasks/imagemin')(gulp, plugins, config.projectFolder))
/* <= imagemin */

/* export => export wszystkich potrzebnych plików na serwer */
gulp.task('export', ['sass', 'atf', 'concatCss', 'concatJs'])
/* <= export */

/* sync => */
gulp.task('sync', require('./gulp-tasks/sync')(gulp, plugins, config.projectFolder, onError))
/* <= sync */
