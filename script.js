
let hour = document.querySelector('.hR');
let minute = document.querySelector('.mI');
let seconds = document.querySelector('.sE');
let day = document.querySelector('.dA');
let date = document.querySelector('.dT');
let month = document.querySelector('.mO');

const weekdays =[
    'Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const months =[
    'January', 'February','March','April','May','June','July','August','September','October','November','December'];

function formatTime(time){
    return time<10 ? "0"+ time : time;
}
function updateClock(){
    const today = new Date();
    let DT = today.getDate();
    let DA = weekdays[today.getDay()];
    let MO = months[today.getMonth()]; 
    let HR = formatTime(today.getHours());
    let MI = formatTime(today.getMinutes());
    let SE = formatTime(today.getSeconds());


    hour.textContent = HR;
    minute.textContent = MI;
    seconds.textContent = SE;
    day.textContent = DA;
    date.textContent = DT;
    month.textContent = MO;

}
setInterval(updateClock,1000)
