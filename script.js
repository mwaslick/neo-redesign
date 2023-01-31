window.setInterval(ut, 1000);

function ut() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });;
  document.getElementById("date").innerHTML = d.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });;
}

ut();