var x;
x=prompt("Introduce un numero");
var y;
y=prompt("Introduce otro numero");
x=parseInt(x);
y=parseInt(y);
function compara(){
if (x>y) {
  document.getElementById("demo").innerHTML=x+" es mayor que "+y;
}else if (y>x) {
    document.getElementById("demo").innerHTML=y+" es mayor que "+x;
}else{
  document.getElementById("demo").innerHTML="Son iguales"
}
}
