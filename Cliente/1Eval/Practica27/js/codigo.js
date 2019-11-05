//Variables Globales
var secreto =Math.floor(Math.random()*100+1);
var intentos=6;
//Genera todos los botones
function generaBotones(){
  var body = document.getElementsByTagName("body")[0];
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var caption= document.createElement("caption");
  var hilera = document.createElement("tr");
  var contador=1;
for (var i = 1; i <11; i++) {
  var hilera = document.createElement("tr");

  for (var j = 1; j <11; j++) {
    var celda = document.createElement("td");
    var b1=document.createElement("BUTTON");
    b1.setAttribute("id",contador);
    b1.setAttribute("class","myButton");
    b1.setAttribute("onclick","comprueba(this.id)")
    b1.innerHTML=contador;
    hilera.appendChild(celda);
    hilera.appendChild(b1);
    contador++;
  }

  tblBody.appendChild(hilera);
}
tabla.appendChild(tblBody);
body.appendChild(tabla);
var div=document.createElement("div");
var b1=document.createElement("BUTTON");
b1.setAttribute("id","reinicia");
b1.setAttribute("class","myButton2");
b1.setAttribute("onclick","reiniciaPartida()");
b1.setAttribute("style","visibility: hidden;");
b1.innerHTML="Reiniciar Partida"
div.appendChild(b1);
body.appendChild(div);
}
//Comprueba si el boton es el correcto llamada desde cada vez que se pulsa un boton
function comprueba(id){
  if(id==secreto){
    for (var i = 1; i < 101; i++) {
      if(i!=secreto){
      document.getElementById(i).setAttribute("style","visibility:hidden;");
      document.getElementById("reinicia").removeAttribute("style");
    }
    }
    document.getElementById("consejo").innerHTML="Acertaste";
    alert("HAS GANADO");
    document.getElementById(id).setAttribute("disabled","true");
  }else if(id>secreto){
    document.getElementById(id).setAttribute("style","visibility:hidden;");
    intentos--;
    document.getElementById("consejo").innerHTML="El numero secreto es menor."+" Te quedan "+intentos+" intentos";
  }else{
    document.getElementById(id).setAttribute("style","visibility:hidden;");
    intentos--;
    document.getElementById("consejo").innerHTML="El numero secreto es mayor"+" Te quedan "+intentos+" intentos";
  }

compruebaIntentos();
}
//Comprueba el numero de fallos llamada desde comprueba
function compruebaIntentos(){

  if (intentos==0) {
    for (var i = 1; i < 101; i++) {
      document.getElementById(i).setAttribute("disabled","true");

    }
    alert("TE QUEDASTE SIN INTENTOS");
    document.getElementById("reinicia").removeAttribute("style");
  }
}
//Si se acaba el juego llama esta funcion para encender el boton de Reiniciar
function enciendeBotonReincia(){
  document.getElementById("reinicia").removeAttribute("style");
}
//Reinicia la partida
function reiniciaPartida(){
    secreto =Math.floor(Math.random()*100+1);
    intentos=6;
      document.getElementById("consejo").innerHTML="SUERTE";
      document.getElementById("reinicia").setAttribute("style","visibility:hidden;");
    for (var i = 1; i < 101; i++) {
        document.getElementById(i).removeAttribute("disabled");
        document.getElementById(i).removeAttribute("style");
    }

}
