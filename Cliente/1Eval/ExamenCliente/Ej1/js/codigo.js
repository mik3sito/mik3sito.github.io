var ositos=0;
var contador=0;
function genera(){
    var body=document.getElementsByTagName("body")[0];
    var filas=document.getElementById("filas").value;
    var columnas=document.getElementById("columnas").value;
    borraElementos();
    console.log(filas);
    var tabla=document.getElementById("tabla");
    ositos=filas*columnas;
    for (var i = 0; i< filas; i++) {
      console.log("aa");
      var tr=document.createElement("tr");
      for (var j = 0; j < columnas; j++) {
        var td=document.createElement("td");
        var img=document.createElement("img");
        img.setAttribute("src","img/osito.png");
        img.setAttribute("id",contador)
        img.setAttribute("onclick","pulsa(this.id)");
        img.setAttribute("alt","osito");
        td.appendChild(img)
        tr.appendChild(td);
        contador++;
      }
      tabla.appendChild(tr);
    }
    body.appendChild(tabla);
    var p=document.getElementById("quedan");
    p.style="";
    p.innerHTML="Quedan "+ositos+" ositos";
    body.appendChild(p);
}

function borraElementos(){
  var x = document.getElementsByTagName("p");
  x[0].setAttribute("style","display:none");
  x[1].setAttribute("style","display:none");
  document.getElementById("boton").style="display: none";
}

function pulsa(id){
  ositos--;
  if(ositos>0){
  var imagen=document.getElementById(id);
  imagen.style="visibility: hidden";
  imagen.setAttribute("onclick","");
  document.getElementById("quedan").innerHTML="Quedan "+ositos+" ositos";
  }else{
  var tabla=document.getElementById("tabla");
  tabla.innerHTML="";
  document.getElementById("quedan").style="visibility:hidden";
  var x = document.getElementsByTagName("p");
  x[0].setAttribute("style","");
  x[1].setAttribute("style","");
  document.getElementById("boton").style="";
  }
}
