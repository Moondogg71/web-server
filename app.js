var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require("./middleware.js")



//MIDDLE WARE ----------------------------------------------------------
app.use(middleware.logger);



//ROUTES ----------------------------------------------------------
app.get('/about', middleware.requireAuthentication, function(req, res, next){
	res.send("<h1>This is the About Route</h1>");
});





app.use(express.static(__dirname + '/public')); //LINKS PUBLIC DIRECTORY 

app.listen(PORT, function() {
	console.log("Express is running on PORT " + PORT);
});