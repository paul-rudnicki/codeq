module.exports = function (gulp, plugins, projectFolder) {
    return function () {
        gulp.src("../"+projectFolder+"/assets/media/*.+(png|jpg|jpeg|gif)")
				.pipe(plugins.imagemin({
					optimizationLevel: 7,
                    progressive : true,
                    use : [ plugins.imageminJpegtran(), plugins.pngquant() ]
				}))
        .pipe(gulp.dest('../'+projectFolder+'/assets/media'))
    };
};
