module.exports = function (gulp, plugins, projectFolder, onError, files) {
    return function () {
        gulp.src(files)
        	.pipe(plugins.plumber( { errorHandler : onError } ) )
            .pipe(plugins.concatCss( "styles.css" ) )
            .pipe( gulp.dest( '../'+projectFolder+'/dist/css' ) )
            .pipe(plugins.rename( { suffix : '.min' } ) )
            .pipe(plugins.uglifycss({
	 			"maxLineLen" : 500000,
	 			"uglyComments" : true
	 		}))
	 		.pipe( gulp.dest( '../'+projectFolder+'/dist/css' ) );
    };
};
