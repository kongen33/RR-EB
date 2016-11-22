var klokke = document.getElementById('klokke');


var date = new Date();
var audio = new Audio("yey.mp4");

setInterval(function() {
    date = new Date();

    var sec = date.getSeconds();
    var min = date.getMinutes();
    var tim = date.getHours();



    klokke.innerHTML = tim + ":" + min + ":" + sec;

}, 40);

audio.play();
