var contador=0;

function muestra(){
   palabra=document.getElementById("texto").value;
   var letras=palabra.split("");
   var longitud=palabra.length;
   if (palabra=="") {
      alert("Campo Vacío");
      stopLoop();
    }else{
      document.getElementById("muestra").innerHTML+=letras[contador]+"<br>";
      contador++;
    }
    if(contador===longitud){
    stopLoop();
    }
}

function startLoop(){
  myVar = setInterval(muestra, 500);
    document.getElementById("texto").setAttribute("disabled","true");
    document.getElementById("muestra").innerHTML="";
}
function stopLoop(){
  clearInterval(myVar);
    document.getElementById("texto").removeAttribute("disabled");
  contador=0;
}
