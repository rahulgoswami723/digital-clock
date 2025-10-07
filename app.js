const hour=document.getElementById('hour');
const minute= document.getElementById('minute');
const second= document.getElementById('second');
const day= document.getElementById('day');

var monthName=[
     'January',
     'February',
     'March',
     'April',
     'May',
     'June',
     'July',
     'August',
     'September',
     'October',
     'November',
     'December',
];

const clock = setInterval(function time (){
    let today = new Date();
    let d= today.getDay();
    let m = today.getMonth();
    let y = today.getFullYear();
    let hours = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();

    day.innerHTML=`${d} ${monthName[m]} ${y}` //it indicates the day months and years it fetches data from const clock funct like getday()...
    hour.textContent=hours;
    minute.innerText=mins;
    second.innerText=secs;
})

const toggleBtn = document.getElementById('modeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
