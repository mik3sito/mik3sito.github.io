var boo=false;
function genera(){
  $("button").click(function(){
    var b1=document.getElementById("boton");
  if(boo){
    b1.innerHTML="Vuelve";
    boo=false;
  }else{
    b1.innerHTML="Cambia";
    boo=true;
  }
});
}
