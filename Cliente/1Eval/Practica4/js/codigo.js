


function genera_tabla(){
  x=prompt("Introduzca un número");
x=parseInt(x);
    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var caption= document.createElement("caption");
    document.getElementById("h2").innerHTML="Tabla del "+x;
    for (var i = 1; i <=x; i++) {
      var hilera = document.createElement("tr");
      for (var j = 0; j < 2; j++) {
        var celda = document.createElement("td");
        if (j==0) {
            var textoCelda = document.createTextNode(x+" x "+i+" = ");
        }else{
            var textoCelda = document.createTextNode(x*i);
        }
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }

      tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    document.getElementById("Boton").disabled=true;
  }
