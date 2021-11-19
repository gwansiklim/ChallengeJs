const color = document.querySelector("body");

window.onresize = function () {
    const innerWidth = window.innerWidth;
    if (innerWidth > 700) {
        document.body.style.backgroundColor = "purple";
    } else if (innerWidth > 500) {
        document.body.style.backgroundColor = "blue";
    } else if (innerWidth > 1000) {
        document.body.style.backgroundColor = "red";
    }
}