function genera(){
  var tabla=document.getElementById("tabla");
  for (var j = 0; j < 100; j++) {
    var hilera = document.createElement("tr");
    for (var i = 0; i < 7; i++) {
      var random=Math.floor((Math.random() * 2) + 1);
      var celda = document.createElement("td");
      var imagen=document.createElement("img");
      if (random==1) {
        imagen.setAttribute("src","img/manzanas.jpg");
      }else{
          imagen.setAttribute("src","img/peras.jpg");
      }

      hilera.appendChild(imagen);
      hilera.appendChild(celda);
    }
    tabla.appendChild(hilera);
  }

}
