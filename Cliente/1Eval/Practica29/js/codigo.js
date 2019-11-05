function comprueba(){
  var email=document.getElementById('email').value;
  var contraseña=document.getElementById('contraseña').value;
  if (email.indexOf("@")<0) {
    alert("Email sin @");
  }else if (email.indexOf(".")<0) {
    alert("Email sin .");
  }else if(contraseña.length<=7){
    alert("Contraseña demasiado corta");
  }else if(contraseña.length>=16){
    alert("Contraseña demasiado larga");
  }else{
    window.open("https://www.google.com/");
  }
}
