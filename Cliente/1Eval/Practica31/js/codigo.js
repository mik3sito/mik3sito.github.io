var x = document.getElementsByTagName("a");
function inicia(){


document.getElementById("ultEnlace").innerHTML="El ultimo enlace apunta a: "+x[x.length-1].href;
  document.getElementById("numEnlace").innerHTML="Numero de Enlaces ="+x.length;

  var div= document.getElementById("botones");
  for (var i = 0; i < x.length; i++) {
    var boton=document.createElement("BUTTON");
    boton.innerHTML=x[i].innerHTML;
    boton.setAttribute("id",i)
    boton.setAttribute("onclick","redirige(this.id)");
    div.appendChild(boton);
    div.innerHTML+="<br>";
  }
}

function redirige(id){
window.open(x[id].href, '_blank');
}
