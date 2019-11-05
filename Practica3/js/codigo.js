var x=prompt("Introduzca una palabra");
var mayus=false;
var minus=false;
function mayusculas(){
  for (var i = 0; i < x.length; i++) {
    if (x.charAt(i).toUpperCase()==x.charAt(i)) {
      mayus=true;
    }else{
      minus=true;
    }
  }
  if(mayus && !minus){
    alert("La palabra "+x+" está formada por mayúsculas.");
  }else if (!mayus && minus) {
    alert("La palabra "+x+" está formada por minusculas.");
  }else{
    alert("La palabra "+x+" está formada tanto por mayúsculas como por minúsculas.");
  }
}
