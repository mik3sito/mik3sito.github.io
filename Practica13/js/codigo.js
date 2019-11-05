var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var contador=0;
function imprime(){
document.getElementById("demo").innerHTML += meses[contador]+"<br>";
contador++;
if (contador==12) {
  myStopFunction();
}
}
function myStartFunction() {
  myVar = setInterval(imprime, 1000);
}
 function myStopFunction() {
 clearInterval(myVar);
}
