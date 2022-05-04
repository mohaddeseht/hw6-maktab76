const time = new Date();
function getTime(time) {


    return time.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });
}
console.log(getTime(time));