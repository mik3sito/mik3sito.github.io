var personas=Array();

function genera(){
  var div=document.getElementById("ficha");
  var p=document.createElement("P");
  var p1=document.createElement("P");
  var p2=document.createElement("P");
  var p3=document.createElement("P");
  var p4=document.createElement("P");
  var p5=document.createElement("P");
  var p6=document.createElement("P");
  var p7=document.createElement("P");
  var b1=document.createElement("BUTTON");
  p.innerHTML="Nombre: "
  var input = document.createElement('input');
  input.setAttribute("id","nombre");
  input.type = "text";
  input.value = "";
  p.appendChild(input);
  div.appendChild(p);
  p1.innerHTML="Apellidos: "
  var input = document.createElement('input');
  input.setAttribute("id","apellidos");
  input.type = "text";
  input.value = "";
  p1.appendChild(input);
  div.appendChild(p1);
  p2.innerHTML="Edad: "
  var input = document.createElement('input');
  input.setAttribute("id","edad");
  input.type = "text";
  input.value = "";
  p2.appendChild(input);
  div.appendChild(p2);
  p3.innerHTML="DNI: "
  var input = document.createElement('input');
  input.setAttribute("id","dni");
  input.type = "text";
  input.value = "";
  p3.appendChild(input);
  div.appendChild(p3);
  p4.innerHTML="Nota Matemáticas: "
  var input = document.createElement('input');
  input.setAttribute("id","mates");
  input.type = "text";
  input.value = "";
  p4.appendChild(input);
  div.appendChild(p4);
  p5.innerHTML="Nota Lengua: "
  var input = document.createElement('input');
  input.setAttribute("id","lengua");
  input.type = "text";
  input.value = "";
  p5.appendChild(input);
  div.appendChild(p5);
  p6.innerHTML="Nota Inglés: "
  var input = document.createElement('input');
  input.setAttribute("id","ingles");
  input.type = "text";
  input.value = "";
  p6.appendChild(input);
  div.appendChild(p6);
  p7.innerHTML="Nota TIC: "
  var input = document.createElement('input');
  input.setAttribute("id","tic");
  input.type = "text";
  input.value = "";
  p7.appendChild(input);
  div.appendChild(p7);
  b1.setAttribute("id","boton")
  b1.innerHTML="Añadir alumno";
  b1.setAttribute("onclick","añade()");
  div.appendChild(b1);
}

function añade(){
  document.getElementById("boton").innerHTML="Añadir Alumno";
  var nombre=document.getElementById("nombre").value;
  var apellidos=document.getElementById("apellidos").value;
  var edad=document.getElementById("edad").value;
  var dni=document.getElementById("dni").value;
  var mates=document.getElementById("mates").value;
  var lengua=document.getElementById("lengua").value;
  var ingles=document.getElementById("ingles").value;
  var tic=document.getElementById("tic").value;
  document.getElementById("nombre").value="";
  document.getElementById("apellidos").value="";
  document.getElementById("edad").value="";
  document.getElementById("dni").value="";
  document.getElementById("mates").value="";
  document.getElementById("lengua").value="";
  document.getElementById("ingles").value="";
  document.getElementById("tic").value="";
  var p1 = new Persona(nombre,apellidos,edad,dni,mates,lengua,ingles,tic);
  personas.push(p1);
  var div=document.getElementById("personas");
  var p=document.createElement("p");
  p.innerHTML+=p1.toString();
  p.setAttribute("id","p"+(personas.length-1));
  var boton1=document.createElement("BUTTON");
  boton1.innerHTML="Eliminar";
  boton1.setAttribute("id","rm"+(personas.length-1));
  boton1.setAttribute("onclick","elimina(this.id)");
  p.appendChild(boton1);
  var boton2=document.createElement("BUTTON");
  boton2.innerHTML="Editar";
  boton2.setAttribute("id","ed"+(personas.length-1));
  boton2.setAttribute("onclick","edita(this.id)");
  p.appendChild(boton2);
  div.appendChild(p)
}

function elimina(idstr){
  var id = idstr.substr(2);
  personas.splice(id, 1);
  var div=document.getElementById("personas");
  div.innerHTML="";
  for(var i=0; i<personas.length; i++){
    var p=document.createElement("p");
    p.innerHTML+=personas[i].toString();
    p.setAttribute("id","p"+i);
    var boton1=document.createElement("BUTTON");
    boton1.innerHTML="Eliminar";
    boton1.setAttribute("id","rm"+i);
    boton1.setAttribute("onclick","elimina(this.id)");
    p.appendChild(boton1);
    var boton2=document.createElement("BUTTON");
    boton2.innerHTML="Editar";
    boton2.setAttribute("id","ed"+i);
    boton2.setAttribute("onclick","edita(this.id)");
    p.appendChild(boton2);
    div.appendChild(p)
  }
}

function edita(idstr){
var id= idstr.substr(2);
var per=personas[id];
document.getElementById("nombre").value=per.getNombre();
document.getElementById("apellidos").value=per.getApellidos();
document.getElementById("edad").value=per.getEdad();
document.getElementById("dni").value=per.getDni();
document.getElementById("mates").value=per.getMates();
document.getElementById("lengua").value=per.getLengua();
document.getElementById("ingles").value=per.getIngles();
document.getElementById("tic").value=per.getTic();
elimina(idstr);
document.getElementById("boton").innerHTML="Guarda Cambios";
}

function Persona(nombre, apellidos, edad, dni, mates, lengua, ingles, tic) {
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.edad = edad;
  this.dni = dni;
  this.mates=mates;
  this.lengua=lengua;
  this.ingles=ingles;
  this.tic=tic;
  this.media=(parseInt(this.mates)+parseInt(this.lengua)+parseInt(this.ingles)+parseInt(this.tic))/4;
  this.cambiarNombre = function (nombre) {
    this.nombre = nombre;
  };
  this.toString= function (){
    return "Nombre: "+ this.nombre +" Apellidos: "+ this.apellidos+" Edad: "+ this.edad+" DNI: "+ this.dni+" Nota Mates: "+ this.mates +" Nota Lengua: "+ this.lengua +" Nota inglés: "+ this.ingles+" Nota TIC: "+ this.tic+" Nota Media: "+this.media;
  }
  this.getNombre=function(){
    return this.nombre;
  }
  this.getApellidos=function(){
    return this.apellidos;
  }
  this.getEdad=function(){
    return this.edad;
  }
  this.getDni=function(){
    return this.dni;
  }
  this.getMates= function(){
    return this.mates;
  }
  this.getLengua= function(){
    return this.lengua;
  }
  this.getIngles =function(){
    return this.ingles;
  }
  this.getTic= function(){
    return this.tic;
  }
}
