const saatEl = document.getElementById("saat");
const dakikaEl = document.getElementById("dakika");
const saniyeEl = document.getElementById("saniye");
const pmAmEl = document.getElementById("pmAm");

function updateSaat() {
    let hours = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let pmAm = "AM";

    if (hours > 12) {
        hours = hours - 12;
        pmAm = "PM"
    }
    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    saatEl.innerText = hours;
    dakikaEl.innerText = minute;
    saniyeEl.innerText = second;
    pmAmEl.innerText = pmAm;
    setTimeout(() => {
        updateSaat();
    }, 1000);
}
updateSaat();