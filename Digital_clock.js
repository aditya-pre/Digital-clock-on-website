
setInterval(hello, 1000);
let all;
function hello(all) {
    let newDate = new Date();
    let hour = newDate.getHours();
    if (hour > 12) {
        hour -= 12;
    }
    let min = newDate.getMinutes();
    let sec = newDate.getSeconds();
    all = hour + ":" + min + ":" + sec;
    let clock = document.getElementById("clock").innerHTML = all;
    // console.log(clock)
}