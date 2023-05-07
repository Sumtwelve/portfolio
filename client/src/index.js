const allButtons = document.querySelectorAll("button");

const body = document.querySelector("body");

allButtons.forEach((button) => button.addEventListener("click", openSection));

function openSection(e) {
    const btnBackground = getComputedStyle(e.target)['background-color'];
    console.log(btnBackground);
    if(body.style.backgroundColor === btnBackground) {
        body.style.backgroundColor = '#ebebeb';
    } else {
        body.style.backgroundColor = btnBackground;
    }
}