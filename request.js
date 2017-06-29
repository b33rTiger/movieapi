var request = require("request");

request('', function(error, response, body){
	if(!error && response.statusCode == 200){
		var data = JSON.parse(body);
		console.log(data.query.results.channel.astronomy.sunset);
	};
});