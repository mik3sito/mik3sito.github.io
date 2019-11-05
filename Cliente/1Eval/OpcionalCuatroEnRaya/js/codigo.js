//Genera la Tabla con los botones
function genera_tabla(){
    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var caption= document.createElement("caption");
    var hilera = document.createElement("tr");
    for (var j = 0; j < 7; j++) {
      var celda = document.createElement("td");
      var b1=document.createElement("BUTTON");
      b1.setAttribute("id", "botInicio"+j);
      b1.setAttribute("class","BotonTop");
      b1.innerHTML="↓";
      b1.setAttribute("onclick","añade"+j+"()");
      hilera.appendChild(celda);
      hilera.appendChild(b1);
    }
    tblBody.appendChild(hilera);
    for (var i = 0; i <=5; i++) {
      var hilera = document.createElement("tr");

      for (var j = 0; j < 7; j++) {
        var celda = document.createElement("td");
        var b1=document.createElement("BUTTON");
        b1.setAttribute("id", "bot"+i+""+j);
        b1.setAttribute("class","myButton");
        b1.setAttribute("disabled","");
        b1.innerHTML=" ";
        hilera.appendChild(celda);
        hilera.appendChild(b1);
      }

      tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
  }

/*Las funciones añaden, se ejecutan cada vez que se pulsa el boton de arriba
a su vez llaman a la funcion comprueba para comprobar si ha ganado alguno de los dos jugadores
*/
var turno=0;
function añade0(){
for (var i = 5; i > -1; i--) {
j=0;
  if (document.getElementById("bot"+i+""+j).style.backgroundColor=="") {
    if (turno==0) {
      document.getElementById("bot"+i+""+j).style.backgroundColor="red";
    turno=1;
    }else{
      document.getElementById("bot"+i+""+j).style.backgroundColor="blue";
      turno=0;
    }
      break;
  }
}
comprueba();
}
function añade1(){
for (var i = 5; i > -1; i--) {
j=1;

  if (document.getElementById("bot"+i+""+j).style.backgroundColor=="") {
    if (turno==0) {
      document.getElementById("bot"+i+""+j).style.backgroundColor="red";
    turno=1;
    }else{
      document.getElementById("bot"+i+""+j).style.backgroundColor="blue";
      turno=0;
    }
    break;
  }
}
comprueba();
}
function añade2(){
for (var i = 5; i > -1; i--) {
j=2;
  if (document.getElementById("bot"+i+""+j).style.backgroundColor=="") {
    if (turno==0) {
      document.getElementById("bot"+i+""+j).style.backgroundColor="red";
    turno=1;
    }else{
      document.getElementById("bot"+i+""+j).style.backgroundColor="blue";
      turno=0;
    }
    break;
  }
}
comprueba();
}
function añade3(){
for (var i = 5; i > -1; i--) {
j=3;
  if (document.getElementById("bot"+i+""+j).style.backgroundColor=="") {
    if (turno==0) {
      document.getElementById("bot"+i+""+j).style.backgroundColor="red";
    turno=1;
    }else{
      document.getElementById("bot"+i+""+j).style.backgroundColor="blue";
      turno=0;
    }
    break;
  }
}
comprueba();
}
function añade4(){
for (var i = 5; i > -1; i--) {
j=4;
  if (document.getElementById("bot"+i+""+j).style.backgroundColor=="") {
    if (turno==0) {
      document.getElementById("bot"+i+""+j).style.backgroundColor="red";
    turno=1;
    }else{
      document.getElementById("bot"+i+""+j).style.backgroundColor="blue";
      turno=0;
    }
    break;
  }
}
comprueba();
}
function añade5(){
for (var i = 5; i > -1; i--) {
j=5;
  if (document.getElementById("bot"+i+""+j).style.backgroundColor=="") {
    if (turno==0) {
      document.getElementById("bot"+i+""+j).style.backgroundColor="red";
    turno=1;
    }else{
      document.getElementById("bot"+i+""+j).style.backgroundColor="blue";
      turno=0;
    }
    break;
  }
}
comprueba();
}
function añade6(){
for (var i = 5; i > -1; i--) {
j=6;
  if (document.getElementById("bot"+i+""+j).style.backgroundColor=="") {
    if (turno==0) {
      document.getElementById("bot"+i+""+j).style.backgroundColor="red";
    turno=1;
    }else{
      document.getElementById("bot"+i+""+j).style.backgroundColor="blue";
      turno=0;
    }
    break;
  }
}
comprueba();
}

//La funcion comprueba llama a las funciones comprueba y a la funcion quedanHuecos
function comprueba(){
compruebaVertical();
compruebaHorizontal();
compruebaOblicuoBaja();
compruebaOblicuoSube();

quedanHuecos();
}
//funcion que comprueba todas las verticales
function compruebaVertical(){
  for (var j = 0; j < 7; j++) {
  var contadorRojo=0;
  var contadorAzul=0;
  for (var i = 0; i <4; i++) {
      if (document.getElementById("bot"+i+""+j).style.backgroundColor=="red") {
        contadorRojo++;
      }else if (document.getElementById("bot"+i+""+j).style.backgroundColor=="blue") {
        contadorAzul++;
      }
      if (contadorAzul==4) {
        alert("Gana Azul");
        desactivaBotones();
      }else if (contadorRojo==4) {
        alert("Gana Rojo")
        desactivaBotones();
      }
  }}
  for (var j = 0; j < 7; j++) {
  var contadorRojo=0;
  var contadorAzul=0;
  for (var i = 1; i <5; i++) {
      if (document.getElementById("bot"+i+""+j).style.backgroundColor=="red") {
        contadorRojo++;
      }else if (document.getElementById("bot"+i+""+j).style.backgroundColor=="blue") {
        contadorAzul++;
      }
      if (contadorAzul==4) {
        alert("Gana Azul");
        desactivaBotones();
      }else if (contadorRojo==4) {
        alert("Gana Rojo")
        desactivaBotones();
      }
  }}
  for (var j = 0; j < 7; j++) {
  var contadorRojo=0;
  var contadorAzul=0;
  for (var i = 2; i <= 5; i++) {
      if (document.getElementById("bot"+i+""+j).style.backgroundColor=="red") {
        contadorRojo++;
      }else if (document.getElementById("bot"+i+""+j).style.backgroundColor=="blue") {
        contadorAzul++;
      }
      if (contadorAzul==4) {
        alert("Gana Azul");
        desactivaBotones();
      }else if (contadorRojo==4) {
        alert("Gana Rojo")
        desactivaBotones();
      }
  }}
}
//funcion que comprueba todas las horizontales
function compruebaHorizontal(){
  for (var j = 0; j < 6; j++) {
  var contadorRojo=0;
  var contadorAzul=0;
  for (var i = 0; i < 4; i++) {
      if (document.getElementById("bot"+j+""+i).style.backgroundColor=="red") {
        contadorRojo++;
      }else if (document.getElementById("bot"+j+""+i).style.backgroundColor=="blue") {
        contadorAzul++;
      }
      if (contadorAzul==4) {
        alert("Gana Azul");
        desactivaBotones();
      }else if (contadorRojo==4) {
        alert("Gana Rojo")
        desactivaBotones();
      }
  }}
  for (var j = 0; j < 6; j++) {
  var contadorRojo=0;
  var contadorAzul=0;
  for (var i = 1; i < 5; i++) {
      if (document.getElementById("bot"+j+""+i).style.backgroundColor=="red") {
        contadorRojo++;
      }else if (document.getElementById("bot"+j+""+i).style.backgroundColor=="blue") {
        contadorAzul++;
      }
      if (contadorAzul==4) {
        alert("Gana Azul");
        desactivaBotones();
      }else if (contadorRojo==4) {
        alert("Gana Rojo")
        desactivaBotones();
      }
  }}
  for (var j = 0; j < 6; j++) {
  var contadorRojo=0;
  var contadorAzul=0;
  for (var i = 2; i < 6; i++) {
      if (document.getElementById("bot"+j+""+i).style.backgroundColor=="red") {
        contadorRojo++;
      }else if (document.getElementById("bot"+j+""+i).style.backgroundColor=="blue") {
        contadorAzul++;
      }
      if (contadorAzul==4) {
        alert("Gana Azul");
        desactivaBotones();
      }else if (contadorRojo==4) {
        alert("Gana Rojo")
        desactivaBotones();
      }
  }}
  for (var j = 0; j < 6; j++) {
  var contadorRojo=0;
  var contadorAzul=0;
  for (var i = 3; i <=6; i++) {
      if (document.getElementById("bot"+j+""+i).style.backgroundColor=="red") {
        contadorRojo++;
      }else if (document.getElementById("bot"+j+""+i).style.backgroundColor=="blue") {
        contadorAzul++;
      }
      if (contadorAzul==4) {
        alert("Gana Azul");
        desactivaBotones();
      }else if (contadorRojo==4) {
        alert("Gana Rojo")
        desactivaBotones();
      }
  }}
}
//funcion que comprueba oblicuos desde esquina inferior izquierda a superior derecha
function compruebaOblicuoSube(){
  for (var k = 0; k < 4; k++) {
      var i=3;
      var contadorRojo=0;
      var contadorAzul=0;
      //console.log("bot"+(j+k)+""+i);
      for (var j = 0; j < 4; j++) {
        if (document.getElementById("bot"+i+""+(j+k)).style.backgroundColor=="red") {
          contadorRojo++;
        }else if (document.getElementById("bot"+i+""+(j+k)).style.backgroundColor=="blue") {
          contadorAzul++;
        }
        if (contadorAzul==4) {
          alert("Gana Azul");
          desactivaBotones();
        }else if (contadorRojo==4) {
          alert("Gana Rojo")
          desactivaBotones();
        }
        i--;
      }
  }
  for (var k = 0; k < 4; k++) {
      var i=4;
      var contadorRojo=0;
      var contadorAzul=0;
      for (var j = 0; j < 4; j++) {
        if (document.getElementById("bot"+i+""+(j+k)).style.backgroundColor=="red") {
          contadorRojo++;
        }else if (document.getElementById("bot"+i+""+(j+k)).style.backgroundColor=="blue") {
          contadorAzul++;
        }
        if (contadorAzul==4) {
          alert("Gana Azul");
          desactivaBotones();
        }else if (contadorRojo==4) {
          alert("Gana Rojo")
          desactivaBotones();
        }
        i--;
      }
  }
  for (var k = 0; k < 4; k++) {
      var i=5;
      var contadorRojo=0;
      var contadorAzul=0;
      for (var j = 0; j < 4; j++) {
        if (document.getElementById("bot"+i+""+(j+k)).style.backgroundColor=="red") {
          contadorRojo++;
        }else if (document.getElementById("bot"+i+""+(j+k)).style.backgroundColor=="blue") {
          contadorAzul++;
        }
        if (contadorAzul==4) {
          alert("Gana Azul");
          desactivaBotones();
        }else if (contadorRojo==4) {
          alert("Gana Rojo")
          desactivaBotones();
        }
        i--;
      }
  }
  }
//funcion que comprueba oblicuos desde esquina inferior derecha a superior izquierda
function compruebaOblicuoBaja(){
  for (var k = 0; k < 4 ; k++) {
    i=0;
      var contadorRojo=0;
      var contadorAzul=0;

      for (var j = 0; j < 4; j++) {

        if (document.getElementById("bot"+j+""+(i+k)).style.backgroundColor=="red") {
          contadorRojo++;
        }else if (document.getElementById("bot"+j+""+(i+k)).style.backgroundColor=="blue") {
          contadorAzul++;
        }
        if (contadorAzul==4) {
          alert("Gana Azul");
          desactivaBotones();
        }else if (contadorRojo==4) {
          alert("Gana Rojo")
          desactivaBotones();
        }
        i++;
        //console.log(contadorAzul+" "+contadorRojo);
      }


  }
  for (var k = 0; k < 4 ; k++) {
    i=0;
      var contadorRojo=0;
      var contadorAzul=0;

      for (var j = 1; j < 5; j++) {

        if (document.getElementById("bot"+j+""+(i+k)).style.backgroundColor=="red") {
          contadorRojo++;
        }else if (document.getElementById("bot"+j+""+(i+k)).style.backgroundColor=="blue") {
          contadorAzul++;
        }
        if (contadorAzul==4) {
          alert("Gana Azul");
          desactivaBotones();
        }else if (contadorRojo==4) {
          alert("Gana Rojo")
          desactivaBotones();
        }
        i++;
      }

  }
  for (var k = 0; k < 4 ; k++) {
    i=0;
      var contadorRojo=0;
      var contadorAzul=0;

      for (var j = 2; j < 6; j++) {

        if (document.getElementById("bot"+j+""+(i+k)).style.backgroundColor=="red") {
          contadorRojo++;
        }else if (document.getElementById("bot"+j+""+(i+k)).style.backgroundColor=="blue") {
          contadorAzul++;
        }
        if (contadorAzul==4) {
          alert("Gana Azul");
          desactivaBotones();
        }else if (contadorRojo==4) {
          alert("Gana Rojo")
          desactivaBotones();
        }
        i++;
      }

  }
}
//funciona
function quedanHuecos(){
  var contadorVacios=0;
  for (var i = 0; i <=5 ; i++) {
    for (var j = 0; j <=6; j++) {
      if (document.getElementById("bot"+i+""+j).style.backgroundColor=="") {
        contadorVacios++;
      }
    }
  }

  if (contadorVacios==0) {
    alert("Tablas");
    desactivaBotones();
  }
}
//funciona
function desactivaBotones(){
  for (var j = 0; j < 7; j++) {
    document.getElementById("botInicio"+j).disabled=true;
  }
}
