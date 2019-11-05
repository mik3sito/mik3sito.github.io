function convierte(){
  var texto=document.getElementById("texto").value;
  document.getElementById("muestra").innerHTML="<i><strike>"+texto+"</i></strike>"
}


function intro(){
  if (event.key=="Enter") {
    convierte();
  }
}
