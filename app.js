function clock(){
const date =new Date();
var hr=date.getHours();
var min=date.getMinutes();
var sec=date.getSeconds();

if(hr<10)
    hr="0"+hr;

if(min<10)
    min="0"+min;
    
if(sec<10)
    sec="0"+sec;



document.getElementById('h').innerHTML=hr;
document.getElementById('m').innerHTML=":"+min;
document.getElementById('s').innerHTML=":"+sec;
}

setInterval(clock,100);

