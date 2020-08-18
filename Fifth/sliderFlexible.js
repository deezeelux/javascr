const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".item");
//псевдомассив без методов pop/push, shift/unshift

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
//колво видимых элементов изначально
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;
//Текущая позиция списка

itemsList.style.right = currentRight;

right.addEventListener("click", e => {
    e.preventDefault();
    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    }
})

left.addEventListener("click", e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
    }
})

//жесткие значения
//const minRight = 0;
//const maxRight = 500;
//const step = 100;
//let currentRight = 0;