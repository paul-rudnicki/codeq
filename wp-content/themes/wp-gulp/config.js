var projectFolder = "twentytwentyone-child";
var proxy = "http://localhost/";
var files = {
  "scripts" : [
    "./node_modules/jquery/dist/jquery.min.js",
    "../"+ projectFolder +"/js/**/*.js"
  ],
  "styles" : [
		"node_modules/normalize.css/normalize.css",
    "../"+ projectFolder +"/css/**/*.css",
		"../"+ projectFolder +"/main.css"
  ]
}

exports.proxy = proxy;
exports.projectFolder = projectFolder;
exports.files = files;
