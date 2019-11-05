var x= prompt("Introduce una frase");
var contadora=0;
var contadore=0;
var contadori=0;
var contadoro=0;
var contadoru=0;

function cuenta(){
for (var i = 0; i < x.length; i++) {
   if (x[i] == 'a' || x[i] == 'A') {
     contadora++;
   }else if (x[i] == 'e' || x[i] == 'E') {
     contadore++;
   }else if (x[i] == 'i' || x[i] == 'I') {
     contadori++;
   }else if (x[i] == 'o' || x[i] == 'O') {
     contadoro++;
   }else if (x[i] == 'u' || x[i] == 'U') {
     contaduru++;
   }
 }
 document.getElementById("demo").innerHTML = "Tu frase contiene " + contadora + " veces la letra a, "+ contadore + " veces la letra e, "+ contadori + " veces la letra i, "+ contadoro + " veces la letra o, "+ contadoru + " veces la letra u.";
}
