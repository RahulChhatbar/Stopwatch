var hrs = 00;
var min = 00;
var sec = 00;
var ms = 00;
var time;
function starttime() {
    if (!time) {
    time = setInterval(start, 10);
}
}
function stp() {
    clearInterval(time);
    time = false;
}
function gettime() {
    return (hrs < 10 ? '0' + hrs : hrs) + ":" + (min < 10 ? '0' + min : min) + ":" + (sec < 10 ? '0' + sec : sec) + ":" + (ms < 10 ? '0' + ms : ms);
}
function start() {
    document.getElementById("watch").textContent = gettime();
    ms++;
    if (ms == 100) {
        ms = 00;
        sec++;
    }
    if (sec == 60) {
        sec = 00;
        min++;
    }
    if (min == 60) {
        min = 00;
        hrs++;
    }
}

function pause() {
    stp();
}

function reset() {
    stp();
    hrs = 00;
    min = 00;
    sec = 00;
    ms = 00;  
    document.getElementById("watch").textContent = gettime();
}
function res() {
    reset();
    starttime();
}

function lap() {
    if(time) {
        var li = document.createElement('li');
        li.innerText = gettime();
        document.getElementById("lapcontent").appendChild(li);
    }
    document.getElementById('abc').style.visibility = 'visible';
}

function reslap() {
    document.getElementById("lapcontent").innerHTML = 'Lap Time';
    document.getElementById('abc').style.visibility = 'hidden';
}