function genera(){
  var manzanas=0, peras=0, contador=0;
  var tabla=document.getElementById("tabla");
  for (var j = 0; j < 6; j++) {
    var hilera = document.createElement("tr");
    for (var i = 0; i < 4; i++) {
      var random=Math.floor((Math.random() * 2) + 1);
      var celda = document.createElement("td");
      var imagen=document.createElement("img");
      imagen.setAttribute("id",contador);
      if (random==1 && manzanas<12) {
        imagen.setAttribute("src","img/manzanas.jpg");
        manzanas++;
      }else if (peras<12) {
        imagen.setAttribute("src","img/peras.jpg");
        peras++;
      }else if (manzanas>=12) {
        imagen.setAttribute("src","img/peras.jpg");
        peras++;
      }else if(peras>=12){
        imagen.setAttribute("src","img/manzanas.jpg");
        manzanas++;
      }
      contador++;
      hilera.appendChild(imagen);
      hilera.appendChild(celda);
    }
    tabla.appendChild(hilera);
  }

}
