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






