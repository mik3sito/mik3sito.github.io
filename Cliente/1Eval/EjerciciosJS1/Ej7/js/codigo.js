var x= prompt("Introduce una frase");
var contador=0;

function cuenta(){
for (var i = 0; i < x.length; i++) {
   if (x[i] == 'a' || x[i] == 'A') {
     contador++;
   }
 }
 document.getElementById("demo").innerHTML = "Tu frase contiene " + contador + " veces la letra a";
}
