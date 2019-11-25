var numeros=Array();

function genera(){
  var div=document.getElementById("botonera");
  div.innerHTML="";
  var numbotones=document.getElementById("numbotones").value;
  for (var i = 0; i <numbotones; i++) {
    var boton=document.createElement("BUTTON");
    numeros[i]=Math.floor(Math.random() * 100) + 1;
    boton.innerHTML=numeros[i];
    boton.id=i;
    boton.setAttribute("onclick","suma(this.id)");
    div.appendChild(boton);
  }
}

function suma(id){
  numeros[id]++;
  var boton=document.getElementById(id);
  boton.innerHTML=numeros[id];
}
