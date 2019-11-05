function generaReloj(){
  var date = new Date();
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  //
  var horas=date.getHours();
  var minutos=date.getMinutes();
  var segundos=date.getSeconds();
  if (horas>11) {
    horas=horas-12;
  }
  var gradoHoras=((horas*30)-90)*Math.PI/180;
  var gradoMinutos=((minutos*6)-90)*Math.PI/180;
  var gradoSegundo=((segundos*6)-90)*Math.PI/180;


//Limpia el canvas
ctx.clearRect(0, 0, 400, 400);


//Dibuja circulo exterior
  ctx.lineWidth=6;
  ctx.beginPath();
  ctx.arc(200,200,196,0,2*Math.PI);
  ctx.fillStyle = "#6ab150";
  ctx.fill();
  ctx.stroke();
  ctx.lineWidth=3;
  ctx.beginPath();
  ctx.arc(200,200,185,0,2*Math.PI);

  ctx.stroke();



//Dibuja horas
  ctx.beginPath();
  ctx.lineWidth=10;
  ctx.lineCap="round";
  ctx.moveTo(200,200);
  xfinal=100*Math.cos(gradoHoras)+200;
  yfinal=100*Math.sin(gradoHoras)+200;
  ctx.lineTo(xfinal, yfinal);
  ctx.stroke();

//Dibuja Minutos
  ctx.beginPath();
  ctx.strokeStyle="black";
  ctx.lineWidth=6;
  ctx.lineCap="round";
  xfinal=150*Math.cos(gradoMinutos)+200;
  yfinal=150*Math.sin(gradoMinutos)+200;
  ctx.moveTo(200, 200);
  ctx.lineTo(xfinal, yfinal);
  ctx.stroke();

//Dibuja Segundos
  ctx.beginPath();
  ctx.strokeStyle="red";
  ctx.lineWidth=4;
  ctx.lineCap="round";
  xfinal=150*Math.cos(gradoSegundo)+200;
  yfinal=150*Math.sin(gradoSegundo)+200;
  ctx.moveTo(200, 200);
  ctx.lineTo(xfinal, yfinal);
  ctx.stroke();

//Dibuja centro
  ctx.beginPath();
  ctx.strokeStyle="black";
  ctx.fillStyle = "white";
  ctx.arc(200,200,12,0,2*Math.PI);
  ctx.fill();
  ctx.stroke();



}

function startLoop(){
  bucle=setInterval(generaReloj, 500);
  document.getElementById("botonStop").removeAttribute("disabled");
}
function stopLoop() {
clearInterval(bucle);
document.getElementById("botonStop").setAttribute("disabled","true");
}
