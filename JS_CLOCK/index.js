const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const numberClock = document.getElementById('number-clock');
const defaultHandPos = 90;

function playAudio(){
    secSound.currentTime = 0;
    secSound.volume = 0.3;
    secSound.play();
    
}
function setNumberClock(sec,min,hour){
    let suf = (hour<12)?'AM':'PM';
    numberClock.innerHTML = `${hour%12} : ${min} : ${sec} ${suf}`
}
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360+90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minute = now.getMinutes();
    const minDegrees = ((minute/60)*360)+ ((seconds/60)*6)  + 90;
    minDegrees.style.transform = `rotate(${minDegrees}deg)`;
    playAudio();
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    setSec(sec);
        setMin(min);
        setHour(hour);
    setNumberClock(sec,min,hour);
}

setInterval(setDate, 1000);