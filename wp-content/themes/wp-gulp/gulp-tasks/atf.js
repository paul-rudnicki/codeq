module.exports = function (gulp, plugins, projectFolder, onError) {
  return function () {
    gulp.src('../'+ projectFolder +'/sass/atf.sass')
      .pipe(plugins.plumber( { errorHandler : onError } ) )
      .pipe(plugins.sass( { outputStyle : 'compressed' } ))
      .pipe(plugins.autoprefixer( { browsers : [ 'Firefox 14', 'IE 8', 'IE 9', 'last 5 versions', 'Opera 11.1' ], cascade : false } ))
      .pipe(plugins.uglifycss({
        "maxLineLen" : 500000,
        "uglyComments" : true
      }))
      .pipe(plugins.concatUtil.header('<style>'))
      .pipe(plugins.concatUtil.footer('</style>'))
      .pipe(plugins.rename({
        basename: 'atf',
        extname: '.php'
      }))
      .pipe(gulp.dest('../'+ projectFolder +'/'))
  };
}