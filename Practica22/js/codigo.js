

function generaArray(maximo){
var numeros=Array();
  for (var i = 0; i < maximo; i++) {
    var aux=Math.round(Math.random()*999+1);
    numeros[i]=aux;
  }
  return numeros;
}

function mezcla(array1, array2){
 var devuelve=array1.concat(array2);
 return devuelve;
}

function recogeValor(){
  var devuelve=document.getElementById("texto").value;
  return devuelve;
}

function muestra(){
  var aux=recogeValor();
  if (isNaN(aux) || recogeValor()=="") {
    alert("Campo Erroneo")
  }else{
    var numeros1=generaArray(aux);
    var numeros2=generaArray(aux);
    var numeros3=mezcla(numeros1, numeros2);
      numeros3.sort(function(a, b){return a - b});
    document.getElementById("array1").innerHTML="Primer array ordenado: "+numeros1;
      document.getElementById("array2").innerHTML="Segundo array ordenado: "+numeros2;
        document.getElementById("array3").innerHTML="Tercer array ordenado: "+numeros3;
  }
}
