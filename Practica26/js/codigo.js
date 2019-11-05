var contador=Array();

function generaBotones(){
    var body = document.getElementsByTagName("body")[0];
    for(var i=0; i<6;i++){
      contador[i]=0;
      var b1= document.createElement("BUTTON");
      b1.setAttribute("id", ""+i);
      b1.setAttribute("class","Boton");
      b1.innerHTML="Clicks : "+contador[i];
      b1.setAttribute("onclick","añade(this.id)");
      body.appendChild(b1);
    }
}

function añade(id){
contador[id]++;
  document.getElementById(id).innerHTML="Clicks: "+contador[id];
}
