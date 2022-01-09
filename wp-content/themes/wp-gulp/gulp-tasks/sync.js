module.exports = function( gulp, plugins, projectFolder, onError, configFTP ){
	return function(){
		gulp.watch(
			[
				'../'+projectFolder+'/assets/media/*.*',
			],
			function(){
				plugins.fileSync(
					'../'+projectFolder+'/assets/media',
					'../../uploads',
					{
						recursive: false
					}
				);
			}
		);
	};
};
