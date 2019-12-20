
var arriba=50;
var izq=50;
$(document).ready(function(){
  $("#Arriba").click(function(){
    arriba-=50;
    $(".mueve").animate({top: arriba+'px'});
    document.getElementById("muestra").innerHTML=izq+"px "+arriba+"px"
  });
  $("#Abajo").click(function(){
    arriba+=50;
    $(".mueve").animate({top: arriba+'px'});
    document.getElementById("muestra").innerHTML=izq+"px "+arriba+"px"
  });
  $("#Izquierda").click(function(){
    izq-=50;
    $(".mueve").animate({left: izq+'px'});
  document.getElementById("muestra").innerHTML=izq+"px "+arriba+"px"
  });
  $("#Derecha").click(function(){
    izq+=50;
    $(".mueve").animate({left: izq+'px'});
    document.getElementById("muestra").innerHTML=arriba+"px "+izq+"px"
  });
});
