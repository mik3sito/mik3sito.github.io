function repite(){
  var width= Math.random()*window.innerWidth;
  var height= Math.random()*window.innerHeight;
  if (width>=114) {
    width-=114;
  }
  if (height>=214) {
    height-=214;
  }
  var nave=document.getElementById('nave');
  nave.style.position = "fixed";
  nave.style.top = height+"px";
  nave.style.left = width+"px";
}

function startLoop(){
  bucle=setInterval(repite, 800);

}
function stopLoop(){
clearInterval(bucle);
alert("Has Ganado");
}
