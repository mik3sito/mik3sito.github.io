
function myfunction(){
  var x = location.hostname;
   var y = location.pathname;
   var z= location.protocol;
   var a= location.port;
document.getElementById("hostname").innerHTML="hostname: "+x;
document.getElementById("pathname").innerHTML="pathname: "+y;
document.getElementById("protocol").innerHTML="protocol: "+z;
document.getElementById("port").innerHTML="port: "+z;
}


function redirigir(){
  var url=document.getElementById("url").value;
  if (url!="") {
    location.assign(url);
  }else{
    alert("Introduce una url");
  }
}

 //
