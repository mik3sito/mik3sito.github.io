var x= prompt("Introduce una frase");
var contadora=0;
var contadore=0;
var contadori=0;
var contadoro=0;
var contadoru=0;
var resultado="Vocales que aparecen :";

function cuenta(){
for (var i = 0; i < x.length; i++) {
   if (x[i] == 'a' || x[i] == 'A') {
     resultado+=" a";
   }else if (x[i] == 'e' || x[i] == 'E') {
      resultado+=" e";
   }else if (x[i] == 'i' || x[i] == 'I') {
     resultado+=" i";
   }else if (x[i] == 'o' || x[i] == 'O') {
      resultado+=" o";
   }else if (x[i] == 'u' || x[i] == 'U') {
      resultado+=" u";
   }
 }
 document.getElementById("demo").innerHTML = resultado;
}
