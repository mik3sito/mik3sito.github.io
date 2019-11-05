var x=prompt("Introduce un número");
x=parseInt(x);
var f=2;
var divisores = [0,0,0];
var cadena="";
function comprueba(){
while (x!=1) {
  if(x%f==0){
    x/=f;
    divisores[f]+=1;
  }else{
    f++;
    divisores[f]=0;
  }
}
for (var i = 2; i < divisores.length; i++) {
  cadena+= i+" ^ "+divisores[i]+"  ";
}
document.getElementById("demo").innerHTML=cadena;
}
