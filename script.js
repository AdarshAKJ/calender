const  date = document.getElementById("date");
const  day = document.getElementById("day");
const  month = document.getElementById("month");
const  year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(today);
date.innerHTML = (today.getDate() < 10?"0":"")+  today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = month.getMonth();
year.innerHTML = year.getYear();
