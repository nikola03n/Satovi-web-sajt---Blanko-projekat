let toggle = document.getElementById('toggle');
let menu = document.getElementById('menu');

toggle.addEventListener("click", Toggle);

function Toggle(){
    menu.classList.toggle("menu");
}