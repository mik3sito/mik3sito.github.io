var x=prompt("Introduce un número");
x=parseInt(x);
var y=prompt("Introduce otro número");
y=parseInt(y);

function divisores(){
var divisoresx = [0,0,0];
var divisoresy = [0,0,0];
var f=2;
var cadena="";
var longitud=0;
while (x!=1) {
  if(x%f==0){
    x/=f;
    divisoresx[f]+=1;
  }else{
    f++;
    divisoresx[f]=0;
  }
}
f=2;
while (y!=1) {
  if(y%f==0){
    y/=f;
    divisoresy[f]+=1;
  }else{
    f++;
    divisoresy[f]=0;
  }
}

if (divisoresx.length>divisoresy.length) {
  longitud=divisoresx.length;
}else{
  longitud=divisoresy.length;
}
for (var i = 2; i < longitud; i++) {
  if (divisoresx[i]>0&&divisoresy[i]>0) {
    if (divisoresx[i]>divisoresy[i]) {
      cadena+= i+" ^ "+divisoresy[i]+"  ";
    }else {
      cadena+= i+" ^ "+divisoresx[i]+"  ";
    }
  }else{

  }
}
if (cadena=="") {
  cadena= "1";
}
document.getElementById("demo").innerHTML=cadena;
}
