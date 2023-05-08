const allButtons = document.querySelectorAll("button");

const body = document.querySelector("body");

allButtons.forEach((button) => button.addEventListener("click", openSection));

function openSection(e) {
    const btnBackground = getComputedStyle(e.target)['background-color'];
    console.log(btnBackground);
    if(body.style.backgroundColor !== btnBackground) {
        // body bg color is not same as button bg color,
        // meaning tab is not open, so we 'open' the tab
        body.style.backgroundColor = btnBackground;
    } else {
        // body bg color is same as button just clicked,
        // which means that tab is currently 'open',
        // so we 'close' the tab (set bg color to its default)
        body.style.backgroundColor = '#ebebeb';
    }
}