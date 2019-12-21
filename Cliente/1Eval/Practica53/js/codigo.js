
var arriba=50;
var izq=50;
var randomX=Array();
var randomY=Array();

$(document).ready(function(){
  $("#Arriba").click(function(){
    if (comprueba(this)) {
    arriba-=25;
    $(".mueve").animate({top: arriba+'px'});
    document.getElementById("muestra").innerHTML=arriba+"px "+izq+"px"
  }
  });
  $("#Abajo").click(function(){
    if (comprueba(this)) {
   arriba+=25;
    $(".mueve").animate({top: arriba+'px'});
    document.getElementById("muestra").innerHTML=arriba+"px "+izq+"px"
  }
  });
  $("#Izquierda").click(function(){
    if(comprueba(this)){
    izq-=25;
    $(".mueve").animate({left: izq+'px'});
    document.getElementById("muestra").innerHTML=arriba+"px "+izq+"px"
  }
  });
  $("#Derecha").click(function(){
    if (comprueba(this)) {
      izq+=25;
      $(".mueve").animate({left: izq+'px'});
      document.getElementById("muestra").innerHTML=arriba+"px "+izq+"px"
    }

  });
});
function genera(){
  var contenedor=document.getElementById("obstaculos");
  for (var i = 0; i < 5; i++) {
    var div=document.createElement("div");
    var izqrandom=Math.floor(Math.random()*40+1)*25;
    var arirandom=Math.floor(Math.random()*20+1)*25;
    div.style="background:black;height:50px;width:50px;position:absolute; left: "+izqrandom+"px; top: "+arirandom+"px;"
    randomX[i]=izqrandom;
    randomY[i]=arirandom;
    contenedor.appendChild(div);
  }

}

function comprueba( a){
  var devuelve=true;
  for (var i = 0; i < 5; i++) {
    if(randomX[i]==izq+50 && a.id=="Derecha" && (randomY[i]==arriba||randomY[i]==arriba+25||randomY[i]==arriba-25)){
      devuelve=false;
    }else if (a.id=="Abajo" && randomY[i]==arriba+50 && (randomX[i]==izq||randomX[i]==izq+25||randomX[i]==izq-25)) {
      devuelve=false;
    }else if (randomX[i]==izq-50 && a.id=="Izquierda" && (randomY[i]==arriba||randomY[i]==arriba+25||randomY[i]==arriba-25)) {
      devuelve=false;
    }else if (a.id=="Arriba" && randomY[i]==arriba-50 && (randomX[i]==izq||randomX[i]==izq+25||randomX[i]==izq-25)) {
      devuelve=false;
    }
  }
  return devuelve;
}
