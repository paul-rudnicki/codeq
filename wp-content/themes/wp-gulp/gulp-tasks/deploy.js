'use strict';

module.exports = function (gulp, plugins, projectFolder, configFTP) {
  return function () {
      var conn = plugins.vinylFtp.create( {
          host:     configFTP.ftp.host,
          user:     configFTP.ftp.user,
          password: configFTP.ftp.password,
          parallel: 10,
          log: plugins.util.log,
          idleTimeout: 10000
      });

      var globs = [
          '../'+projectFolder+'/**',
          '!../'+projectFolder+'/sass/**',
          '!../'+projectFolder+'/sass',
          '!../'+projectFolder+'/css/**',
          '!../'+projectFolder+'/css'
      ];

			gulp.src( globs, { buffer: false } )
	        .pipe( conn.newer( configFTP.ftp.path ) )
	        .pipe( conn.dest( configFTP.ftp.path ) );
	}
};
