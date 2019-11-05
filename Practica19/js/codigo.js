var numeros=Array(10);

function generaArray(){
  for (var i = 0; i < 10; i++) {
    var aux=Math.round(Math.random()*999+1);
    numeros[i]=aux;
  }
document.getElementById("array").innerHTML=numeros;
}

function añadeAlFinal(){
  numeros.push(Math.round(Math.random()*999+1));
  document.getElementById("array").innerHTML=numeros;
}
function añadeAlPrincipio(){
  empujaArray();
  numeros[0]=Math.round(Math.random()*999+1);
    document.getElementById("array").innerHTML=numeros;
}

function empujaArray(){
  for (var i = numeros.length-1 ; i >=0; i--) {
    numeros[i+1]=numeros[i];
  }
}

function eliminaPrimero(){
  numeros.shift();
  document.getElementById("array").innerHTML=numeros;
}
function eliminaUltimo(){
  numeros.pop();
  document.getElementById("array").innerHTML=numeros;
}
function ordenaAsc(){
  numeros.sort(function(a, b){return a - b});
  document.getElementById("array").innerHTML=numeros;
}
function ordenaDes(){
  numeros.sort(function(a, b){return b - a});
    document.getElementById("array").innerHTML=numeros;
}
