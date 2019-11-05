var x=prompt("Introduce un número");
x=parseInt(x);
var a="";


function comprueba(){
  if (x%2==0) {
    a+="Es divisible entre 2 ";
  }
   if (x%3==0) {
    a+="Es divisible entre 3 ";
  }
   if (x%5==0) {
    a+="Es divisible entre 5 ";
  }
   if (x%7==0) {
    a+="Es divisible entre 7 ";
  }
  document.getElementById("demo").innerHTML=a;
}
