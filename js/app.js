const mainContainer = document.getElementById('main-container');
window.addEventListener('scroll', handleScrollEvent);

function createDiv(element, className) {
    const div = document.createElement(element);
    div.className = className;
    mainContainer.append(div);
}
function scrollEvent() {
    for (let i = 0; i <= 8; i++) {
        const div1 = createDiv('div', 'boxes');
    }
}
scrollEvent();

function handleScrollEvent(e) {
    const scrollHeight = window.pageYOffset;
    if (scrollHeight > 122) {
        scrollEvent();
    }
    console.log(scrollHeight)
}
