var turno=0;
var array=['-','-','-','-','-','-','-','-','-'];
var contador=0;
function acaba(){
  contador=0;
for (var i = 0; i < array.length; i++) {
  if (array[i]=='-') {
    contador++;
  }
}

if (array[0]=='X') {
  if (array[1]=='X') {
    if (array[2]=='X') {
      alert("Gana X");
      turno=2;
    }
  }
    if (array[3]=='X') {
      if (array[6]=='X') {
        alert("Gana X");
        turno=2;
      }
    }
    if (array[4]=='X') {
      if (array[8]=='X') {
        alert("Gana X");
        turno=2;
      }
    }
}
if (array[1]=='X') {
  if (array[4]=='X') {
    if (array[7]=='X') {
      alert("Gana X");
      turno=2;
    }
  }
}
if (array[2]=='X') {
  if (array[5]=='X') {
    if (array[8]=='X') {
      alert("Gana X");
      turno=2;
    }
  }
  if (array[4]=='X') {
    if (array[6]=='X') {
      alert("Gana X");
      turno=2;
    }
  }
}
if (array[3]=='X') {
  if (array[4]=='X') {
    if (array[5]=='X') {
      alert("Gana X");
      turno=2;
    }
  }
}
if (array[6]=='X') {
  if (array[7]=='X') {
    if (array[8]=='X') {
      alert("Gana X");
      turno=2;
    }
  }
}

if (array[0]=='O') {
  if (array[1]=='O') {
    if (array[2]=='O') {
      alert("Gana O");
      turno=2;
    }
  }
    if (array[3]=='O') {
      if (array[6]=='O') {
        alert("Gana O");
        turno=2;
      }
    }
    if (array[4]=='O') {
      if (array[8]=='O') {
        alert("Gana O");
        turno=2;
      }
    }
}
if (array[1]=='O') {
  if (array[4]=='O') {
    if (array[7]=='O') {
      alert("Gana O");
      turno=2;
    }
  }
}
if (array[2]=='O') {
  if (array[5]=='O') {
    if (array[8]=='O') {
      alert("Gana O");
      turno=2;
    }
  }
  if (array[4]=='O') {
    if (array[6]=='O') {
      alert("Gana O");
      turno=2;
    }
  }
}
if (array[3]=='O') {
  if (array[4]=='O') {
    if (array[5]=='O') {
      alert("Gana O");
      turno=2;
    }
  }
}
if (array[6]=='O') {
  if (array[7]=='O') {
    if (array[8]=='O') {
      alert("Gana O");
      turno=2;
    }
  }
}




if (contador==0) {
  alert("Tablas. No quedan movimientos");
}
}

function cambia1(){
  if (turno==0 && array[0]=='-'){
    turno=1;
    array[0]='X';
document.getElementById("b1").innerHTML="X";
document.getElementById("b1").style.backgroundColor="blue";
}
  else if(turno==1 && array[0]=='-'){
    turno=0;
document.getElementById("b1").innerHTML="O";
document.getElementById("b1").style.backgroundColor="green";
array[0]='O';
  }
  acaba();
}

function cambia2(){
    if (turno==0 && array[1]=='-'){
      turno=1;
      array[1]='X';
  document.getElementById("b2").innerHTML="X";
document.getElementById("b2").style.backgroundColor="blue";}
    else if(turno==1 && array[1]=='-'){
      turno=0;
  document.getElementById("b2").innerHTML="O";
  document.getElementById("b2").style.backgroundColor="green";
  array[1]='O';
  }
  acaba();
}

function cambia3(){
      if (turno==0 && array[2]=='-'){
        turno=1;
        array[2]='X';
    document.getElementById("b3").innerHTML="X";
  document.getElementById("b3").style.backgroundColor="blue";}
      else if(turno==1 && array[2]=='-'){
        turno=0;
    document.getElementById("b3").innerHTML="O";
    document.getElementById("b3").style.backgroundColor="green";
    array[2]='O';
    }
    acaba();
}

function cambia4(){
        if (turno==0 && array[3]=='-'){
          turno=1;
          array[3]='X';
      document.getElementById("b4").innerHTML="X";
    document.getElementById("b4").style.backgroundColor="blue";}
        else if(turno==1 && array[3]=='-'){
          turno=0;
      document.getElementById("b4").innerHTML="O";
      document.getElementById("b4").style.backgroundColor="green";
      array[3]='O';
      }
      acaba();
  }

  function cambia5(){
          if (turno==0 && array[4]=='-'){
            turno=1;
            array[4]='X';
        document.getElementById("b5").innerHTML="X";
      document.getElementById("b5").style.backgroundColor="blue";}
          else if(turno==1 && array[4]=='-'){
            turno=0;
        document.getElementById("b5").innerHTML="O";
        document.getElementById("b5").style.backgroundColor="green";
        array[4]='O';
        }
        acaba();
  }
  function cambia6(){
            if (turno==0 && array[5]=='-'){
              turno=1;
              array[5]='X';
          document.getElementById("b6").innerHTML="X";
        document.getElementById("b6").style.backgroundColor="blue";
      }
            else if(turno==1 && array[5]=='-'){
              turno=0;
          document.getElementById("b6").innerHTML="O";
          document.getElementById("b6").style.backgroundColor="green";
          array[5]='O';
          }
          acaba();
}

function cambia7(){
              if (turno==0 && array[6]=='-'){
                turno=1;
                array[6]='X';
            document.getElementById("b7").innerHTML="X";
          document.getElementById("b7").style.backgroundColor="blue";
        }
              else if(turno==1 && array[6]=='-'){
                turno=0;
            document.getElementById("b7").innerHTML="O";
            document.getElementById("b7").style.backgroundColor="green";
            array[6]='O';
            }
            acaba();
}

function cambia8(){
                if (turno==0 && array[7]=='-'){
                  turno=1;
                  array[7]='X';
              document.getElementById("b8").innerHTML="X";
            document.getElementById("b8").style.backgroundColor="blue";
          }
                else if(turno==1 && array[7]=='-'){
                  turno=0;
              document.getElementById("b8").innerHTML="O";
              document.getElementById("b8").style.backgroundColor="green";
              array[7]='O';
              }
              acaba();
}

function cambia9(){
                  if (turno==0 && array[8]=='-'){
                    turno=1;
                    array[8]='X';
                document.getElementById("b9").innerHTML="X";
              document.getElementById("b9").style.backgroundColor="blue";}
                  else if(turno==1 && array[8]=='-'){
                    turno=0;
                document.getElementById("b9").innerHTML="O";
                document.getElementById("b9").style.backgroundColor="green";
                array[8]='O';
                }
                acaba();
}
