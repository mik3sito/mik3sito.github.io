function cambiaColor(){
  var dias=30;
  var nombreCookie="color";
  var colores=document.getElementsByName('color');
  if (colores[0].checked) {
    document.getElementById("body").style.backgroundColor="red";
    setCookie(nombreCookie,'red',dias);
  }else if (colores[1].checked) {
    document.getElementById("body").style.backgroundColor="green";
      setCookie(nombreCookie,'green',dias);
  }else if(colores[2].checked){
    document.getElementById("body").style.backgroundColor="blue";
      setCookie(nombreCookie,'blue',dias);
  }
}

function carga(){
  var inicio = getCookie('color');
  document.getElementById("body").style.backgroundColor=inicio;
}

function getCookie(variableCookie) {
  var cookie = variableCookie + "=";
  var cookieArray = document.cookie.split(';');
  for(var i = 0; i <  cookieArray.length; i++) {
    var c = cookieArray[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cookie) == 0) {
      return c.substring(cookie.length, c.length);
    }
  }
  return "";
}

function setCookie(nombreCookie, valorCookie,dias){
  var d = new Date();
  d.setTime(d.getTime() + (dias*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
   document.cookie = nombreCookie + "=" + valorCookie + ";"+ expires + ";path=/";
}
