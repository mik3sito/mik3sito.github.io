function generaBotones(){
  var div = document.getElementById('botones');
  for (var i = 0; i <= 9; i++) {
    var b1=document.createElement("BUTTON");
    b1.setAttribute("id", i);
    b1.setAttribute("class","myButton");
    b1.innerHTML=i;
    b1.setAttribute("onclick","añadeNum(this.id)");
    div.appendChild(b1);
  }
  var b1=document.createElement("BUTTON");
  b1.setAttribute("id", "Reset");
  b1.setAttribute("class","myButton");
  b1.innerHTML="Reset";
  b1.setAttribute("onclick","Reset()");
  div.appendChild(b1);
}
function añadeNum(num){
  var dni=document.getElementById("texto").value;
  if (dni=="") {
    document.getElementById("texto").value=num;
  }else if(dni.length<8){
    document.getElementById("texto").value+=num;
  }
  var dni=document.getElementById("texto").value;
  if (dni.length==8) {
    añadeLetra();
  }
}
function Reset(){
  document.getElementById("texto").value="";
}
function añadeLetra(){
  var letras="TRWAGMYFPDXBNJZSQVHLCKE";
  var dni= document.getElementById("texto").value;
  var num=dni%23;
  document.getElementById("texto").value+="-"+letras.charAt(num);
}
