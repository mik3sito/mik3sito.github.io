function myfunction(){
  var url=document.getElementById("texto").value;
if (url!="") {
  var checkBox = document.getElementById("pestaña");
   if (checkBox.checked == true) {
     window.open(url,"_blank");
   }else{

       window.open(url, "", "width=500,height=500");
   }
} else{
  alert("Introduce una url");
}
}
