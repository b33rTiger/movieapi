var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("index");
});

app.get("/results", function(req, res){
	request("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb", function(error, response, body){
		if(!error && response.statusCode == 200) {
			var results = JSON.parse(body);
			console.log(results.Search.Title);
			res.send(results.Search[0].Title);
		};
	});
});

// app.get("/friends", function(req, res){
// 	res.render("friends", {friends: friends});
// });

// app.post("/addfriend", function(req, res){
// 	var newFriend = req.body.newfriend;
// 	friends.push(newFriend);
// 	res.redirect("/friends");
// });

app.listen(3000, function(){
	console.log("listening on port 3000");
});