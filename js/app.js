document.addEventListener("DOMContentLoaded", (event) => {
  // alert('scroll it');
  const mainContainer = document.getElementById("main-container");
  const domFragment = document.createDocumentFragment();
  const imagesClass = document.getElementsByClassName(".images");
  const yesBtn = document.getElementsByClassName("yes");
  const noBtn = document.getElementsByClassName("no");
  const divContainer = document.getElementById("div-container");
  function scrollFunctinality() {
    for (let i = 1; i <= 9; i++) {
      const randomImage = Math.floor(Math.random(i) * 1000);
      const images = createEl(
        "img",
        `https://picsum.photos/seed/picsum${randomImage}/400/350`,
        null,
        "images",
        domFragment
      );
    }
    mainContainer.append(domFragment);
  }
  scrollFunctinality();
  function handleScrollEvent(event) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      scrollFunctinality();
    }
    // document.body.offsetHeight >= 17510
    if (document.body.offsetHeight >= 17510) {
      scrollMore();
      window.removeEventListener("scroll", handleScrollEvent);
    }else if(scrollMore===true){
      window.addEventListener("scroll", handleScrollEvent);
    }
    // console.log(window.innerHeight);
    // console.log(document.body.offsetHeight);
  }
  function scrollMore() {
    let divContainer = createEl("div", null, null, null, mainContainer);
    divContainer.id = "div-container";
    let h1 = createEl("h1",null,"Do you want to more scroll","h1-text",divContainer);
    let buttonYes = createEl("button", null, "Yes", "btn yes", divContainer);
    let buttonNo = createEl("button", null, "No", "btn no", divContainer);
  }
  function handleClickEvent(event) {
    const target = event.target;
    const sliderContainer = document.querySelector(".slider-container");
    const closeBtn = document.querySelector(".fa-xmark");
    const selectedImg = document.querySelector(".selected-img");
    mainContainer.classList.add("remove-pointer");
    if (target.tagName === "IMG") {
      let a = createEl("div", null, null, "slider-container", domFragment);
      let b = createEl("i", null, null, "fa-solid fa-xmark", a);
      let c = createEl("div", null, null, "selected-img", b);
      domFragment.append(c);
    } else if (target.tagName === "I") {
      sliderContainer.classList.add("slider-buffer");
      selectedImg.classList.add("slider-buffer");
    } else if (target.innerText === "Yes") {
      scrollFunctinality();
    }
    console.log(target);
  }
  function createEl(element, src, txt, class_Name, fragment) {
    const elm = document.createElement(element);
    elm.className = class_Name;
    elm.src = src;
    elm.alt = "Image not found";
    elm.innerText = txt;
    fragment.append(elm);
    return elm;
  }
  function events(documentOrWindow, event, functionName) {
    return documentOrWindow.addEventListener(event, functionName);
  }
  events(window, "scroll", handleScrollEvent);
  events(mainContainer, "click", handleClickEvent);
});

// 20 => Return Duplicate Numbers
// Given a list nums where each integer is between 1 and 100, return a sorted list containing only duplicate numbers from the given nums list.

// Examples
// function duplicate_nums(arr) {
//     let res = [];
//     arr.sort((a, b) => { return a - b; });
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             res.push(arr[i]);
//         }
//     }
//     return res.length > 0 ? res : 'None';
// }
// console.log(duplicate_nums([1, 2, 3, 4, 3, 5, 6])) //➞ [3]
// console.log(duplicate_nums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54])) //➞ [72, 81, 99 ]
// console.log(duplicate_nums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) //➞ None

// Notes
// The given list won't contain the same number three times.
// If there are no duplicate numbers, return None.
