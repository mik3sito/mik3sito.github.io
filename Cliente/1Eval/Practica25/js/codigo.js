function convierte(){
  var texto=document.getElementById("texto").value;
  var textoReves=texto.split("").reverse().join("");
  if(texto==textoReves){
    alert("Es Palindromo");
  }else{
    alert("No es Palindromo");
  }
}


function intro(){
  if (event.key=="Enter") {
    convierte();
  }
}
