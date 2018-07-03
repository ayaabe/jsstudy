var express = require('express');
var app = express();

var server = app.listen(3000,function(){
	console.log("app listening at :3000")
})


app.get("/",function(req,res,next){

	res.send(`<html>
		<head>
			<title>javascript練習 day 1</title>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		</head>
		<script>
			$("h1").click(function(){
					console.log("click!!!")
			})
		</script>
		<body>
			<h1>あべは可愛い</h1>
			<dt>概要</dt>
			<dd>しかし、手首をサポートする任務はまったくはたせていない</dd>
		</body>
		</html>	`);

})


