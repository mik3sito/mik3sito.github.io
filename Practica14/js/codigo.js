function muestraHora(){
  var d = new Date();
document.getElementById("hora").innerHTML = d.getHours() + " : " + d.getMinutes() + " : " +d.getSeconds();
}
function myStartFunction() {
  myVar = setInterval(muestraHora, 100);
}
function myStopFunction() {
clearInterval(myVar);
}
