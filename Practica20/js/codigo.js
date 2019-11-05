var arrayNombres=Array();

function recogeNombre(){
  var devuelve=document.getElementById("texto").value;
  return devuelve;
}

function añadeAlFinal(){
  if (recogeNombre()=="") {
    alert("CampoVacio")
  }else{
    arrayNombres.push(recogeNombre());
    document.getElementById("array").innerHTML=arrayNombres;
  }
}
function añadeAlPrincipio(){
  if (recogeNombre()=="") {
    alert("CampoVacio")
  }else{
    empujaArray();
    arrayNombres[0]=recogeNombre();
    document.getElementById("array").innerHTML=arrayNombres;
  }
}
function empujaArray(){
  for (var i = arrayNombres.length-1 ; i >=0; i--) {
    arrayNombres[i+1]=arrayNombres[i];
  }
}

function eliminaPrimero(){
  arrayNombres.shift();
  document.getElementById("array").innerHTML=arrayNombres;
}
function eliminaUltimo(){
  arrayNombres.pop();
  document.getElementById("array").innerHTML=arrayNombres;
}

function ordenaAsc(){
arrayNombres.sort();
document.getElementById("array").innerHTML=arrayNombres;
}
function ordenaDes(){
arrayNombres.sort();
arrayNombres.reverse();
document.getElementById("array").innerHTML=arrayNombres;
}
