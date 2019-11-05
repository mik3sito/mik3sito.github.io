var x;
x=prompt("Introduce un numero");
x=parseInt(x);
function divisible(){
  if(x%2==0){
    document.getElementById("demo").innerHTML=x+" es divisible entre 2";
  }else{
    document.getElementById("demo").innerHTML=x+" no es divisible entre 2";
  }
}
