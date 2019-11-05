function playVideo(){
  document.getElementById("video").play();
}
function pauseVideo(){
  document.getElementById("video").pause();
}
function muteVideo(){
  if (document.getElementById("video").muted==true) {
    document.getElementById("video").muted=false;
  }else{
    document.getElementById("video").muted=true;
  }
}
