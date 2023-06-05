document.getElementById('hamburger').onclick = () => {
    let menu = document.getElementById('menu')
    if (menu.style.display == "block") {
        menu.style.display = "none"
        document.body.classList.remove("stop-scrolling");
    }
    else {
        menu.style.display = "block"
        document.body.classList.add("stop-scrolling");
    }


}
let imageSource = ["images/S1.jpg", "images/S2.jpg", "images/S3.jpg", "images/S4.jpg"]
let i = 0;
setInterval(() => {
    if (i === 4)
        i = 0;
    document.getElementById('slide').src = imageSource[i]
    i++;

}, 2000)
