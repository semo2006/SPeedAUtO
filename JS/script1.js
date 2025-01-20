let detail = document.querySelector(".detail");
let about = document.querySelector(".about");
detail.onclick = function () {
    about.classList.toggle("hidden");
}
let a = document.querySelectorAll("main a");
for (let i = 0; i < a.length; i++) {
    a[i].onclick = () => {
        localStorage.i = i+1 ;
        localStorage.tt = i ;
    }
    
}