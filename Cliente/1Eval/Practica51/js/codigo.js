var contador=0;

$(document).ready(function(){
  $(".miel").dblclick(function(){
    this.style="visibility: hidden";
    contador++;
    document.getElementById("puntuacion").innerHTML="Puntuacion: "+contador;
  });
});
