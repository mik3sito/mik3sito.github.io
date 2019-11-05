function imprimir(){
  var nombre=document.getElementById("nombre").value;

  var password=document.getElementById("pwd").value;

  var email=document.getElementById("email").value;
  var resultado;
  var estado=document.getElementsByName("estadocivil");

  var edad=document.getElementById("edadnumber").value;
  var url=document.getElementById("url").value;
  var provincia=document.getElementById("provincia").value;
  for(var i=0; i<estado.length;i++){
    if(estado[i].checked) {
      resultado=estado[i].value;
    }
  }
var select=document.getElementById("provincia").value;

  var hidden=document.getElementById("escondido").value;
  var datalist=document.getElementById("datalist").value;
  var color=document.getElementById("color").value;
  var fecha=document.getElementById("date").value;
  var tlf=document.getElementById("tlf").value;

  document.getElementById("resultado").innerHTML="Hola "+nombre+"<br> Contraseña: "+password+"<br> Estado civil: "+resultado+
  "<br> Email:"+email+"<br> Edad: "+edad+"<br> URL:"+url+" <br>"+" Hidden: "+hidden+"<br> Provincia: "+select+
  "<br> Navegador: "+datalist+"<br> Color: "+color+"<br> Fecha: "+fecha+"<br> tlf: "+tlf;
  return false;
}
