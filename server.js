var http = require("http");
var request = require('request');

GetWeather = function() {
	var url = "http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/52/lat/12/data.json"

	request(url, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        console.log(body) // Print the google web page.

	        response.writeHead(200, {"Content-Type": "text/html"});
			response.write("<html>");
			response.write("<head>");
			response.write("<title>Hello World Page</title>");
			response.write("</head>");
			response.write("<body>");
			//response.write("Hello void!");
			response.write(body);
			response.write("</body>");
			response.write("</html>");
			response.end();
	     }
	})
}



var server = http.createServer(function(request, response) {
	GetWeather();
});

server.listen(8080);
//console.log("Server is listening");