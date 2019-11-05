var x= prompt("Introduce una frase");
var contador=0;

function cuenta(){
for (var i = 0; i < x.length; i++) {
   if (x[i] == 'a' || x[i] == 'A'||x[i] == 'e' || x[i] == 'E'||x[i] == 'i' || x[i] == 'I'||x[i] == 'o' || x[i] == 'O'||x[i] == 'u' || x[i] == 'U') {
     contador++;
   }
 }
 document.getElementById("demo").innerHTML = "Tu frase contiene " + contador + " vocales";
}
