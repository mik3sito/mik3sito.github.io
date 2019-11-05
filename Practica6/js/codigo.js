function main(){
  var body=document.getElementById("body").innerHTML;
var frase=prompt("Introduce una frase");
var palabras=frase.split(" ");
for (var i = 0; i < palabras.length; i++) {
  palabras[i]=palabras[i].toLowerCase();
}
body+="<p>La frase tiene "+palabras.length+" palabras</p>";
body+="<p>La primera y la ultima palabra son: "+palabras[0]+" ,"+ palabras[palabras.length-1]+"</p>";
palabrasreves=palabras.reverse();
body+="<p>Las palabras colocadas en orden inverso "+palabrasreves+"</p>"
var palabrasordenadas=palabras.sort();
body+="<p>Las palabras ordenadas de la 'a' a la 'z' "+palabrasordenadas+"</p>";
var palabrasdesordenadas=palabrasordenadas.reverse();
body+="<p>Las palabras ordenadas de la 'z' a la 'a' "+palabrasdesordenadas+"</p>";
document.write(body);
}
