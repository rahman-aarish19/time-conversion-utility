function convertSecondsToDateTime() {
    getLocalTimeAndDate();
    getUTCTimeAndDate();
}

function converLocalDateTimeToSeconds() {
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let hours = document.getElementById('hours').value;
    let minutes = document.getElementById('minutes').value;
    let seconds = document.getElementById('seconds').value;

    let d = new Date(year, (month - 1), day, hours, minutes, seconds).getTime();
    d = (d / 1000);
    document.getElementById('display-seconds').innerHTML = d;
}

function getLocalTimeAndDate() {
    let seconds = parseInt(document.getElementById('getSeconds').value);
    let milliseconds = parseInt(seconds * 1000);

    let localDate = moment(new Date(milliseconds)).format('dddd MMM D YYYY hh:mm:ss');

    document.getElementById('displayLocal').innerHTML = localDate;
}

function getUTCTimeAndDate() {
    let seconds = parseInt(document.getElementById('getSeconds').value);
    let milliseconds = (seconds * 1000);
    // Converting to UTC - Subtracting -5:30 hours.
    milliseconds -= 19800000;

    let utcDate = moment(new Date(milliseconds)).format('dddd MMM D YYYY hh:mm:ss');
    document.getElementById('displayUTC').innerHTML = utcDate;
}

// Displaying UNIX TimeStamp.
setInterval(function () {

    // Displaying UNIX Time.
    document.getElementById('displayUnixTime').innerHTML = Date.now();

    // Displaying UTC Date.
    let tstamp = Date.now();
    let utc = tstamp - 19800000;
    utc = moment(new Date(utc)).format('dddd MMM D YYYY');
    document.getElementById('displayUTCDate').innerHTML = utc;

    // Displaying UTC Time.
    let t = Date.now();
    let t2 = t - 19800000;
    t2 = moment(new Date(t2)).format('hh:mm:ss');
    document.getElementById('displayUTCTime').innerHTML = t2;

    // Displaying Local Date.
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();

    let date = new Date(year, month, day);

    let d2 = moment(date).format('dddd MMM D YYYY');

    document.getElementById('displayLocalDate').innerHTML = d2;

    // Displaying Local Time.
    let localTime = new Date().getHours();
    localTime += ':';
    localTime += new Date().getMinutes();
    localTime += ':';
    localTime += new Date().getSeconds();

    document.getElementById('displayLocalTime').innerHTML = localTime;
}, 1000);