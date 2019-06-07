console.log("script")

var diallines = document.getElementsByClassName('diallines');
var clockE1 = document.getElementsByClassName('clock')[0];

//Clock minutes dial lines
for(var i=1; i < 60; i++)
{
    clockE1.innerHTML += "<div class='diallines'></div>"
    diallines[i].style.transform = "rotate(" + 6 * i +"deg)";
}
// Clock Funtion
function clock(){
    var weekday = new Array(7),
    d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds(),
    date = d.getDate(),
    month = d.getMonth() + 1,
    year = d.getYear(),

    //Clock hand moment
    hDeg = h * 30 + m * (360/720),
    mDeg = m * 6 + s * (360/3600),
    sDeg = s * 6,

    hE1 = document.querySelector('.hour-hand'),
    mE1 = document.querySelector('.minute-hand'),
    sE1 = document.querySelector('.second-hand'),
    dateE1 = document.querySelector('.date'),
    dayE1 = document.querySelector('.day');

    //Week days 
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var day = weekday[d.getDay()];
    hE1.style.transform = "rotate("+hDeg+"deg)";
    mE1.style.transform = "rotate("+mDeg+"deg)";
    sE1.style.transform = "rotate("+sDeg+"deg)";
    dateE1.innerHTML = date+"/"+month+"/"+year; //Date format 
    dayE1.innerHTML = day; //Day format

}

setInterval("clock()", 100);


$(document).ready(function() {
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    
    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    $('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
    
    setInterval( function() {
        var seconds = new Date().getSeconds();
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        },1000);
        
    setInterval( function() {
        var minutes = new Date().getMinutes();
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);
        
    setInterval( function() {
        var hours = new Date().getHours();
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);	
    });