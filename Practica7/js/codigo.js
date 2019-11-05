function actual(){
var h = window.innerHeight;
  var w = window.innerWidth;
  document.getElementById("actual1").innerHTML="Actual screen width is " + w;
  document.getElementById("actual2").innerHTML="Actual screen height is " + h;
}

function maximo(){
  document.getElementById("maximo1").innerHTML ="Available screen width is " + screen.width;
document.getElementById("maximo2").innerHTML ="Available screen height is " + screen.height;
}
