var daysoweek = ['sun', 'mon', 'tus', 'wed', 'thu', 'fri', 'sat'];
  //month count
var month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

function clock(){
  // setting up my variables
  var today = new Date(); // date counts
  var h = today.getHours();// hourse count
  var m = today.getMinutes(); // minutes count
  var day = h<11 ? 'AM': 'PM'; // AM or PM count
  var daytoday = today.getDay()
  var date = today.getDate(); // date count
  var mon = today.getMonth(); // Month count
  var year = today.getFullYear(); // year count
}

// adding leading zeros to them

h = h<10? '0'+h: h;
m = m<10? '0'+m: m;
s = s<10? '0'+s: s;

// writing it down in the document

document.getElementById('hours').innerHTML = h;
document.getElementById('min').innerHTML = m;
document.getElementById('sec').innerHTML = s;
document.getElementById('time').innerHTML = day;
document.getElementById('day').innerHTML = date;
document.getElementById('month').innerHTML = month[mon];
document.getElementById('year').innerHTML = year;
document.getElementById(''+daysofweek[daytoday]+'').style.color = '#fff';

var inter = setInterval(clock,400); 
