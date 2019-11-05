var x;
x=prompt("Introduce un numero");
var y;
y=prompt("Introduce otro numero");
var z;
z=prompt("Introduce otro numero");
x=parseInt(x);
y=parseInt(y);
z=parseInt(z);



function compara(){
if (x>y && x>z) {
  document.getElementById("demo").innerHTML=x+" es mayor que "+y+" y que "+z;
}else if (y>x && y>z) {
    document.getElementById("demo").innerHTML=y+" es mayor que "+x+" y que "+z;
}else if(z>x && z>y){
  document.getElementById("demo").innerHTML=z+" es mayor que "+x+" y que "+y;
}else if(z>x && z==y){
  document.getElementById("demo").innerHTML=y+" y "+z +  " son mayores que " +z;
}else if (z>y && z==x) {
  document.getElementById("demo").innerHTML=x+" y "+z+  " son mayores que " +z;
}else if (x>z && x==y) {
  document.getElementById("demo").innerHTML=x+" y "+y  + " son mayores que " +z;
}else{
    document.getElementById("demo").innerHTML="Son iguales";
}
}
