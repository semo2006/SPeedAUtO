let img = document.getElementById("img");
let p = document.getElementById("p");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let tr = document.querySelectorAll("tr");
let tr1 = tr[localStorage.t];
let td = tr1.querySelectorAll("td") 
let td1 = td[localStorage.tt];
text = td[localStorage.tt].innerHTML;
let h1 = td1.querySelector("h1");
if (h1.textContent.slice(-1) == ":") {
    document.title = h1.textContent.slice(0,-1)
}
else{
    document.title = h1.textContent
}
x = 1 ;
img.src= `../IMAGE/${localStorage.f}/${localStorage.i}/1.jpg`
right.onclick = () => {
     
    if (x >= localStorage.n ) {
        x = 1;
    }
    x++ ;
    img.src = `../IMAGE/${localStorage.f}/${localStorage.i}/${x}.jpg`;
}
left.onclick = () => {
    
    if (x == 1) {
        x = localStorage.n;
    }
    x-- ; 
    img.src = `../IMAGE/${localStorage.f}/${localStorage.i}/${x}.jpg`;
}

p.innerHTML = text;
