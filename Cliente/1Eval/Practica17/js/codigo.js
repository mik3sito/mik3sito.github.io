function leeCookie(){
  var contador = getCookie("contador");
    if (contador != "") {
     document.getElementById("escribe").innerHTML="Has visitado la pagina "+contador+" veces";
    } else {
        setCookie("contador", 0, 365);
      }
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
