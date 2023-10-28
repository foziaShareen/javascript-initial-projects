const btn = document.querySelector('.btn');
const bgc = document.querySelector('body');
let colors =['red','yellow','brown','purple'];

btn.addEventListener('click',changecolor);


function changecolor(){
    let random = Math.floor(Math.random()*colors.length);
    bgc.style.backgroundColor=colors[random];
}