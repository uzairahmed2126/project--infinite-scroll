const mainContainer = document.getElementById('main-container');

function createEl(element, src, className, fragment) {
    const img = document.createElement(element);
    img.className = className;
    img.src = src;
    fragment.append(img);
}
function scrollEvent() {
    const domFragment = document.createDocumentFragment();
    for (let i = 1; i <= 9; i++) {
        const div1 = createEl('img', `https://picsum.photos/seed/picsum${Math.floor(Math.random(i) * 1000)}/400/350`, 'images', domFragment);
    }
    mainContainer.append(domFragment);
}
scrollEvent();

function handleScrollEvent(e) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        scrollEvent();
    }
    console.log(window.innerHeight);
}

window.addEventListener('scroll', handleScrollEvent);