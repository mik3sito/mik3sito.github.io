function genera(){
  var body=document.getElementById("body").innerHTML;
  for (var i = 1; i <=6; i++) {
    body+="<h"+i+"> JavaScript </h"+i+">";
  }
document.write(body);
document.getElementById("Boton").disabled=true;
}
