
var apagada=false;
var contador=0;

function cambiaImagen() {
  if (apagada) {
    document.getElementById('myImage').src='apagada.gif';
    apagada=false;
    contador+=1;
  }else{
    document.getElementById('myImage').src='encendida.gif';
    apagada=true;
    contador+=1;
  }

  if (contador==10) {
    document.getElementById('myImage').src='Ajex.jpg';
  }
}

/*var x;
x=prompt("Introduce tu nombre");
if (x!=null) {
  document.write("Hola "+x);
}else{
  document.write("Hola");
}

function suma(){
    var x=5;
    var y=10;
  document.getElementById("demo").innerHTML = x + y;
//  alert(x+y);
}0
*/
