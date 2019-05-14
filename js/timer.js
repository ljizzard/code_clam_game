
<div id="timer"> 0s </div>


function timer(){
setTimeout(function(){
  var timerDiv = document.getElementById("timer");
  time++;
  timerDiv.InnerHTML = time;
  timer();
}, 1000)
}
