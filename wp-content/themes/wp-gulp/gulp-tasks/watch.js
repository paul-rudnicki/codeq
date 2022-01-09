'use strict';

module.exports = function (gulp, plugins, projectFolder, onError, proxy) {
	return function () {
		gulp.watch('../' + projectFolder + '/sass/**/*.sass', ['sass']);
		// gulp.watch('../' + projectFolder + '/**/*.css', ['concatCss']);
		gulp.watch('../' + projectFolder + '/main.css', ['concatCss']);
		gulp.watch('../' + projectFolder + '/js/**/*.js', ['concatJs']);
		// gulp.watch('../' + projectFolder + '/sass/atf.sass', ['atf']);
		gulp.watch('../' + projectFolder + '/sass/**/*.sass', ['atf']);
	};
};
