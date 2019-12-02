function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "libros.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>id</th><th>Autor</th><th>Titulo</th><th>Genero</th><th>Precio</th><th>Fecha Publicación</th><th>Descripción</th></tr>";
  var x = xmlDoc.getElementsByTagName("book");

  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +i+"</td><td>"+
    x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("genre")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("publish_date")[0].childNodes[0].nodeValue +
      "</td><td>"+
      x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
        "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
