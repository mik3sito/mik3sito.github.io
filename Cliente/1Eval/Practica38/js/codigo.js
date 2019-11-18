var frases=Array("Todo tiene belleza pero no todo el mundo la puede ver. Confucio.","Si dudas de ti mismo, estás vencido de antemano. Henrik Ibsen.","El silencio del envidioso está lleno de ruidos. Khalil Gibran", "La critica es la fuerza del impotente. Alphonse de Lamartine.");

//var frases=Array("imprime esta")
function genera(){
  var body=document.getElementsByTagName("body")[0];
  for (var i = 0; i < frases.length; i++) {
    var parrafo=document.createElement("P");
    parrafo.innerHTML=frases[i];
    parrafo.setAttribute("id","p"+i+"");
    var b1 = document.createElement("BUTTON");
    b1.innerHTML="Borrar";
    b1.setAttribute("id",i);
    b1.setAttribute("onclick","borra(this.id)");
    b1.setAttribute("class","myButton");
    parrafo.appendChild(b1);
    body.appendChild(parrafo);
  }
  var p=document.createElement("P");
  p.innerHTML="Frase: "
  var input = document.createElement('input');
  input.setAttribute("id","añade");
  input.type = "text";
  input.value = "";
  p.appendChild(input);
  var b2 = document.createElement("BUTTON");
  b2.innerHTML="Añadir";
  b2.setAttribute("id","Añade");
  b2.setAttribute("onclick","añade()");
  b2.setAttribute("class","myButton");
  p.appendChild(b2);
  body.appendChild(p);
}
function borra(id){
  var body=document.getElementsByTagName("body")[0];
  var arrayAux1=Array();
  var arrayAux2=Array();
  var tmp=parseInt(id)+1;
  if(id>=1){
    arrayAux1=frases.slice(0,(id));
    arrayAux2=frases.slice(tmp,frases.length);
    arrayAux1=arrayAux1.concat(arrayAux2);
    frases=arrayAux1;
  }else{
    frases=frases.slice(1,frases.length);
  }
  body.innerHTML="";
  genera();
}

function añade(){
  var body=document.getElementsByTagName("body")[0];
  var texto=document.getElementById("añade").value;
  frases.push(texto);
  body.innerHTML="";
  genera();
}
