var fiveyears = new Date(2021, 8, 27, 16, 46);
var showcount = setInterval(function) {
  var fiveyears = new Date(2021, 8, 27, 16, 46);
  var currentime = new Date().getTime();
  var timeleft = fiveyears - current;
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days + " days, "
  document.getElementById("hours").innerHTML = hours + " hours, " 
  document.getElementById("mins").innerHTML = minutes + " minutes, " 
  document.getElementById("secs").innerHTML = "and " + seconds + " seconds."
  if (timeleft < 0) {
    clearInterval(showcount);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
    document.getElementById("result").innerHTML = "My scratch account is now at least 5 years old. Feel free to celebrate on my scratch profile.";
  }
}, 2000)

