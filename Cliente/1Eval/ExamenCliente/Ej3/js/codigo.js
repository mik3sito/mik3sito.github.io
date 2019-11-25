var fotos=Array("img/primavera.jpg","img/verano.jpg","img/otoño.jpg","img/invierno.jpg");
var myVar;
var i=0;

function cambiaFoto(){
      var div=document.getElementById("divimg");
      div.innerHTML="";
      var img=document.createElement("img");
      img.src=fotos[i];
      div.appendChild(img);
      if(i==0){
        i++;
      }else if (i==1) {
        i++;
      }else if (i==2) {
        i++;
      }else if (i==3) {
        i=0;
      }
}

function myStartFunction() {
  myVar = setInterval(cambiaFoto, 2000,);
}
