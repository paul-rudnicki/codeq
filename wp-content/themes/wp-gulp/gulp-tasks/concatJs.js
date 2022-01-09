module.exports = function (gulp, plugins, projectFolder, onError, files) {
    return function () {
        gulp.src(files)
        	.pipe(plugins.plumber( { errorHandler : onError } ) )
            .pipe(plugins.concat( "scripts.js" ) )
            .pipe(gulp.dest( '../'+projectFolder+'/dist/js' ) )
            .pipe(plugins.rename( { suffix : '.min' } ) )
            .pipe(plugins.uglify())
	 		.pipe( gulp.dest( '../'+projectFolder+'/dist/js' ) );
    };
};
