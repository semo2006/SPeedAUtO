let detail = document.querySelector(".detail");
let about = document.querySelector(".about");
detail.onclick = function () {
    about.classList.toggle("hidden");
}