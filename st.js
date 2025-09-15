const h1 = document.querySelector("h1");
const div = document.querySelector("div");
const btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let r = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let color = `rgb(${r},${b},${g})`;
    div.style.backgroundColor = color;
    h1.innerText = color;
})