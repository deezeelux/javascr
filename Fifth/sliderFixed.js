const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computed = window.getComputedStyle(items);

right.addEventListener("click", function (e) {
    e.preventDefault();
    //тк кнопки представляют из себя ссылки, то надо запретить им действие по умолчанию
    let currentRight = parseInt(computed.right);
    //parseInt для приведения строки к числу

    if (currentRight < 500) {
        items.style.right = currentRight + 100 + "px";
    }
});

left.addEventListener("click", function (e) {
    e.preventDefault();
    let currentRight = parseInt(computed.right);

    if (currentRight > 0) {
        items.style.right = currentRight - 100 + "px";
    }
});