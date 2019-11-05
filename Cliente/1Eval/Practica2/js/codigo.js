var x=prompt("Introduce un número");
x=parseInt(x);
var cadena="";
function comprueba(){
  if (x%2==0) {
    cadena="El número "+x+" es Par.";
  }else{
    cadena="El número "+x+" es Impar.";
  }
  alert(cadena);
}
