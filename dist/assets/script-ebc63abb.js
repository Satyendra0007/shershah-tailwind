document.getElementById("hamburger").onclick=()=>{let e=document.getElementById("menu");e.style.display=="block"?(e.style.display="none",document.body.classList.remove("stop-scrolling")):(e.style.display="block",document.body.classList.add("stop-scrolling"))};