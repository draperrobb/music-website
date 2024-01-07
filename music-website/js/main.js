var song = document.getElementById("song");
var icon = document.getElementById("icon");
// icon.onclick = function(){
//   song.play();
// }
icon.onclick = function(){
  if (song.paused){
    song.play();
    icon.src = "media/pause.png";
  } else{
    song.pause();
    icon.src = "media/play.png";
  }
}