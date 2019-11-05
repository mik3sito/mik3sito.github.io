//Variables globales
var secreta="";
var muestra="";
var intentos=6;
var letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
var generado=false;
//Inicia partida
function inicia(){
  secreta=prompt("Introduce palabra secreta");
  if (secreta==null) {
    inicia();
  }else{
if (!generado) {
  generaBotones();
  generado=true;
}else{
  document.getElementById("reinicia").setAttribute("style","visibility: hidden;");
  for (var i = 0; i < letras.length; i++) {
    document.getElementById(letras.charAt(i)).removeAttribute("style");
    document.getElementById(letras.charAt(i)).removeAttribute("disabled");

  }
}
  cambiaSecreta();


  generaAhorcado();
  }
  for (var i = 0; i < secreta.length; i++) {
    muestra+="-"
  }
   document.getElementById("secreta").innerHTML=muestra;
}
//Elimina las tildes, comas y puntos, lo pone en mayusculas y quita los espacios
function cambiaSecreta(){
  secreta=normalize(secreta);
  secreta=secreta.toUpperCase();
  secreta=secreta.replace(/ /g, "");
}
//Genera los botones con las letras
function generaBotones(){

  var div= document.getElementById('botones');
  for (var i = 0; i < 27; i++) {
    var b1=document.createElement("BUTTON");
    b1.setAttribute("id", letras.charAt(i));
    b1.setAttribute("class","myButton");
    b1.innerHTML=letras.charAt(i);
    b1.setAttribute("onclick","comprueba(this.id)");
    div.appendChild(b1);
  }
  var div2=document.getElementById('reinicio');
  var b1=document.createElement("BUTTON");
  b1.setAttribute("id", "reinicia");
  b1.setAttribute("class","myButton");
  b1.innerHTML="Reiniciar Partida";
  b1.setAttribute("onclick","reiniciaPartida()");
  b1.setAttribute("style","visibility: hidden;")
  div2.appendChild(b1);
}
//Dibuja Ahorcado en forma inicial
function generaAhorcado(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.lineWidth=10;
  ctx.lineCap="round";
  ctx.moveTo(10,390);
  ctx.lineTo(120,390);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth=10;
  ctx.lineCap="round";
  ctx.moveTo(65,390);
  ctx.lineTo(65,20);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth=10;
  ctx.lineCap="round";
  ctx.moveTo(65,20);
  ctx.lineTo(250,20);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth=10;
  ctx.lineCap="round";
  ctx.moveTo(250,20);
  ctx.lineTo(250,70);
  ctx.stroke();
}
//Quita tildes, puntos y comas de la palabra secreta
var normalize = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÇç,.0123456789",
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuucc            ",
      mapping = {};

  for(var i = 0, j = from.length; i < j; i++ )
      mapping[ from.charAt( i ) ] = to.charAt( i );

  return function( str ) {
      var ret = [];
      for( var i = 0, j = str.length; i < j; i++ ) {
          var c = str.charAt( i );
          if( mapping.hasOwnProperty( str.charAt( i ) ) )
              ret.push( mapping[ c ] );
          else
              ret.push( c );
      }
      return ret.join( '' );
  }

})();

//comprueba cada vez que se le pasa una letra
function comprueba(letra){
  document.getElementById(letra).setAttribute("style","visibility: hidden;");
  var letraAcertada=false;
  for (var i = 0; i < secreta.length; i++) {
    if (letra==secreta.charAt(i)) {
      letraAcertada=true;
      muestra = muestra.substring(0, i) + secreta.charAt(i) + muestra.substring(i+1, muestra.length);
      document.getElementById("secreta").innerHTML=muestra;
    }
  }
  if (!letraAcertada) {
    intentos--;
  }
  dibujaMuerto();
  finalizaPartida();
}
//Dibuja cada vez que se comete un fallo
function dibujaMuerto(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  if (intentos==5) {
    ctx.beginPath();
    ctx.lineWidth=10;
      ctx.arc(250,90,20,0,2*Math.PI);
    ctx.stroke();
  }
  if (intentos==4) {
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.lineCap="round";
    ctx.moveTo(250,110);
    ctx.lineTo(250,250);
    ctx.stroke();
    ctx.stroke();
  }
  if (intentos==3) {
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.lineCap="round";
    ctx.moveTo(250,160);
    ctx.lineTo(200,150);
    ctx.stroke();
    ctx.stroke();
  }
  if (intentos==2) {
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.lineCap="round";
    ctx.moveTo(250,160);
    ctx.lineTo(300,150);
    ctx.stroke();
    ctx.stroke();
  }
  if (intentos==1) {
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.lineCap="round";
    ctx.moveTo(250,250);
    ctx.lineTo(300,275);
    ctx.stroke();
    ctx.stroke();}
  if (intentos==0) {
    ctx.beginPath();
    ctx.lineWidth=10;
    ctx.lineCap="round";
    ctx.moveTo(250,250);
    ctx.lineTo(200,275);
    ctx.stroke();
    ctx.stroke();

  }
}

//Acaba la partida y aparece boton de reinicio
function finalizaPartida(){

if (intentos==0) {
  alert("Te quedaste sin intentos. La palabra secreta era: "+secreta);
desactivaBotones();
document.getElementById("reinicia").removeAttribute("style");
}else if (muestra==secreta && intentos>0) {
  alert("HAS GANADO");
  desactivaBotones();
  document.getElementById("reinicia").removeAttribute("style");
}

}
function desactivaBotones(){
  for (var i = 0; i < letras.length; i++) {
    document.getElementById(letras.charAt(i)).setAttribute("disabled","true");
  }
}
//Reinicia la partida
function reiniciaPartida(){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, 400, 400);
  secreta="";
  muestra="";
  inicia();
  intentos=6;

}
