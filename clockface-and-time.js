'use strict';

const setAnalogTime = () => {
    let canvas = document.getElementById("clock");
    let context = canvas.getContext("2d");
    let clockRadius = canvas.width/2;
    context.beginPath();
    context.fillStyle = "black";
    context.arc(clockRadius, clockRadius, clockRadius, 0, 2*Math.PI);
    context.fill();
    context.fillStyle = "white";
    context.beginPath();
    context.arc(clockRadius, clockRadius, 10, 0, 2*Math.PI);
    context.fill();
    context.font = clockRadius / 10 + "px arial";
    context.textAlign = "center";
    context.textBaseline = "middle";
    for (let i = 1; i <= 12; i++) {
        context.fillText(i, clockRadius + clockRadius * 0.9 * Math.sin(i * 2*Math.PI / 12), clockRadius - (clockRadius * 0.9 * Math.cos(i * 2 * Math.PI / 12)));
    }
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let fullHours = hours % 12 + minutes / 60 + seconds / 3600;
    let hoursAngle = fullHours * 2 * Math.PI / 12;
    let minutesAngle = minutes * 2 * Math.PI / 60;
    let secondsAngle = seconds * 2 * Math.PI / 60;
    context.strokeStyle = "white";
    context.moveTo(clockRadius, clockRadius);
    context.lineTo(clockRadius + clockRadius * 0.6 * Math.sin(hoursAngle), clockRadius - (clockRadius * 0.6 * Math.cos(hoursAngle)));
    context.lineWidth = 5;
    context.stroke();
    context.moveTo(clockRadius, clockRadius);
    context.lineTo(clockRadius + clockRadius * 0.8 * Math.sin(minutesAngle), clockRadius - (clockRadius * 0.8 * Math.cos(minutesAngle)));
    context.lineWidth = 3;
    context.stroke();
    context.moveTo(clockRadius, clockRadius);
    context.lineTo(clockRadius + clockRadius * 0.9 * Math.sin(secondsAngle), clockRadius - (clockRadius * 0.9 * Math.cos(secondsAngle)));
    context.lineWidth = 2;
    context.stroke();
}

const setDigitalTime = () => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let dTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    let digitalTimeSlot = document.getElementById('digital');
    digitalTimeSlot.innerHTML = dTime.toString();
}

setInterval(setDigitalTime, 1000);
setInterval(setAnalogTime, 1000);
