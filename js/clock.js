$(document).ready(function() {
  setInterval(function() {
  var time = new Date();
  var seconds = time.getSeconds();
  var minutes = time.getMinutes();
  var hour = time.getHours();
  // console.log(seconds);
  // console.log(minutes);
  console.log(hour);
  var secHand = document.getElementsByClassName("secondHand");
  var minHand = document.getElementsByClassName("minuteHand");
  var hourHand = document.getElementsByClassName("hourHand");

  var rotateSec = (seconds/60 * 360) + 90;
  $(".secondHand").css("transform", `rotate(${rotateSec}deg)`);
  // $(".secondHand").css("transition", "all: 0.5");

  var rotateMin = (minutes/60 * 360) + 90;
  minHand[0].style.transform = `rotate(${rotateMin}deg)`;
  var rotateHour = (hour/24 * 360) - 90;
  hourHand[0].style.transform = `rotate(${rotateHour}deg)`;


  }, 1000);



});
