function Muestra(){
  document.getElementById("escondido").style="display: inline;";
  document.getElementById("link").innerHTML="Ocultar";
  document.getElementById("link").setAttribute("onclick","Oculta()");
}
function Oculta(){
  document.getElementById("escondido").style="display:none";
  document.getElementById("link").innerHTML="Seguir Leyendo";
  document.getElementById("link").setAttribute("onclick","Muestra()");
}
