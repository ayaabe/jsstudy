var express = require('express');
var app = express();

var server = app.listen(3001,function(){
	console.log("app listening at :3001")
})

function listen(port, fn){
 var successOrFail =listenOn(port);
 // success or fail
 // i am ayaka -> iAmAyaka
 // success_or_fail()
 if (successOrFail){
    fn()
  }


}

var xx = function(){console.log("oppai ")}
xx()

app.get("/",function(req,res,next){

	res.send(`<html>
		<head>
			<title>javascript練習 day 1</title>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		</head>
		<script>
			$("#abe").click(function(){
					console.log("click!!!")
			})
		</script>
		<body>
			<h1 id="abe">あべは可愛い</h1>
			<dt>概要</dt>
			<dd>しかし、手首をサポートする任務はまったくはたせていない</dd>
		</body>
		</html>	`);

})
