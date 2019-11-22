class Pelota {
  constructor(x, y,radio) {
    this.x = x;
    this.y = y;
    this.radio=radio;
    this.vidas=3;
  }
  getX(){
    return this.x;
  }
  getY(){
    return this.y;
  }
  getRadio(){
    return this.radio;
  }
  getVidas(){
    return this.vidas;
  }
  setVidas(vidas){
    this.vidas=vidas;
  }

}

var pelotas=Array();

function inicia(){
  clearInterval(tiempoglo);
  cuenta=0;
document.getElementById("juego").innerHTML="";
  pelotas=Array();
  var radioPelota=(window.innerWidth)*0.01;
  var minWidth=(window.innerWidth)*0.165+radioPelota*2;
  var maxWidth=(window.innerWidth)*0.825-radioPelota*2;
  var minHeigth=53.5+radioPelota;
  var maxHeigth=553.5-radioPelota*2;
   for (var i = 0; i <20; i++) {
      var x=Math.floor(Math.random() * (maxWidth - minWidth))+minWidth;
      var y=Math.floor(Math.random() * (maxHeigth - minHeigth)) + minHeigth;
      var p1=new Pelota(x,y,radioPelota);
      pelotas.push(p1);
      dibujaPelota(p1, i);
  }
  tiempoglo=setInterval(tiempo, 100);
}


function dibujaPelota(Pelota, contador){
  var contenedor=document.getElementById("juego");
  var div=document.createElement("div");
  var tamaño=Pelota.getRadio()*2;
  var top=Pelota.getX();
  var left=Pelota.getY();
  div.id=contador;
  div.style="position: absolute; width:"+tamaño+"px; height:"+tamaño+"px; top:"+left+"px; left:"+top+"px; background-color:green; border-radius: "+tamaño+"px";
  div.setAttribute("onmouseleave","cambiacolor(this)");
  contenedor.appendChild(div);
}


function cambiacolor(div){
  var id=div.id;
var vidas=pelotas[id].getVidas();
  pelotas[id].setVidas(vidas-1);
  vidas=pelotas[id].getVidas();
  vidas=parseInt(vidas);
  if(vidas==2){
    div.style.background="orange";
  }else if(vidas==1){
    div.style.background="red";
  }else if(vidas==0){
      div.style="display: none";
  }
  console.log(vidas);
}

var cuenta=0;

function tiempo(){
cuenta++;
var segundos=cuenta/10;

document.getElementById('tiempo').innerHTML=segundos+"s";
var sinvidas=true;
for (var i = 0; i < pelotas.length; i++) {
  if(pelotas[i].vidas>0){
    sinvidas=false;
  }
  }

  if (sinvidas) {
    alert("Has tardado "+segundos+"s");
    clearInterval(tiempoglo);
    cuenta=0;
  }
}
var tiempoglo;
