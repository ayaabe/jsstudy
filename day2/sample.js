var can = documet.getElementById("canvas");
var ctx = can.gitContext("2d");

var count = 0;//アニメーションカウンター
var timer = setInterval(function(){
ctx.fillStyle="fff;"//消去時の色
ctx.clearRect(0,0,300,300);//消す
ctx.fillStyle="#f00";//塗り潰し色を赤に
ctx.fillRect(30+count,30+count,30,30);
count++;
if(count>200){
clearInterval(timer);
}
},100);
