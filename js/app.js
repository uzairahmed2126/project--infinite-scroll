// document.addEventListener("DOMContentLoaded", (event) => {
//   const mainContainer = document.getElementById("main-container");
//   const domFragment = document.createDocumentFragment();
//   let arr = [];
//   function scrollFunctinality(count) {
//     let Imagecount = 0;
//     for (let i = 1; i <= count; i++) {
//       const randomImage = Math.floor(Math.random(i) * 1000);
//       const images = createEl(
//         "img",
//         `https://picsum.photos/seed/picsum${randomImage}/400/350`,
//         null,
//         "images",
//         domFragment
//       );
//       Imagecount++;
//       mainContainer.append(domFragment);
//       if (Imagecount === count) {
//         scrollMore();
//       }
//       arr.push(images.src);
//     }
//   }
//   scrollFunctinality(9);
// function handleClickEvent(event) {
//   event.preventDefault();
//   const target = event.target;
//   const sliderContainer = document.querySelector(".slider-container");
//   const closeBtn = document.querySelector(".fa-xmark");
//   const selectedImg = document.querySelector(".selected-img");
//   const divContainer = document.getElementById("div-container");
//   const promptContainer = document.querySelector(".prompt-container");
//   mainContainer.classList.add("remove-pointer");
//   function showImageOnClick() {
//     let result;
//     for (let i = 0; i < arr.length; i++) {
//       if (target.src === arr[i]) {
//         result = arr[i];
//       }
//     }
//     return result;
//   }
//   switch (target.tagName) {
//     case "IMG":
//       createEl("div", null, null, "slider-container", mainContainer);
//       createEl("i", null, null, "fa-solid fa-xmark", mainContainer);
//       createEl("i", null, null, "fa-solid fa-chevron-left", mainContainer);
//       createEl("i", null, null, "fa-solid fa-chevron-right", mainContainer);
//       const images = createEl(
//         "img",
//         `${showImageOnClick()}`,
//         null,
//         "images selected-img",
//         mainContainer
//       );
//       break;
//     case "I":
//       if (sliderContainer) {
//         if (target.className === "fa-solid fa-xmark") {
//           sliderContainer.classList.add("slider-buffer");
//           selectedImg.classList.add("slider-buffer");
//           closeBtn.classList.add("slider-buffer");
//         } else {
//           sliderContainer.classList.remove("slider-buffer");
//           selectedImg.classList.remove("slider-buffer");
//           closeBtn.classList.remove("slider-buffer");
//         }
//       }
//       if (promptContainer) {
//         if (target.className === "fa-solid fa-xmark prompt-i") {
//           promptContainer.style.visibility = "hidden";
//         } else {
//           promptContainer.style.visibility = "visible";
//         }
//       }
//       break;
//     case "BUTTON":
//       if (target.innerText === "Yes") {
//         getNumOfPics(target.innerText, divContainer);
//         createEl("button", null, null, "prompt-button", divContainer);
//       }
//       break;
//   }
//   console.log(target);
// }
//   function input(mainDiv) {
//     const inputEl = createEl("input", null, null, "prompt-input", mainDiv);
//     inputEl.placeholder = "Enter number greater then 0";
//     let a = document.querySelector(".prompt-input");
//     a.addEventListener("input", (e) => {
//       let val = e.target.value;
//       if (val.length > 0 && val.length < 3) {
//         setTimeout(() => {
//           alert(`${val} Images is created`);
//         }, 500);
//         scrollFunctinality(val);
//       }
//     });
//   }
//   function getNumOfPics(value, div) {
//     if (value === "Yes") {
//       const mainDiv = createEl(
//         "div",
//         null,
//         null,
//         "prompt-container",
//         mainContainer
//       );
//       const h1El = createEl(
//         "h1",
//         null,
//         "Enter number of pictures",
//         "prompt-h1",
//         mainDiv
//       );
//       input(mainDiv);
//       const closePrompt = createEl(
//         "i",
//         null,
//         null,
//         "fa-solid fa-xmark prompt-i",
//         mainDiv
//       );
//       div.classList.add("add-div-last");
//     } else {
//       div.classList.remove("add-div-last");
//     }
//   }
//   function scrollMore() {
//     const divContainer = createEl("div", null, null, null, mainContainer);
//     divContainer.id = "div-container";
//     const h1 = createEl(
//       "h1",
//       null,
//       "Do you want to more scroll",
//       "h1-text",
//       divContainer
//     );
//     const buttonYes = createEl("button", null, "Yes", "btn yes", divContainer);
//     const buttonNo = createEl("button", null, "No", "btn no", divContainer);
//   }
//   function createEl(element, src, txt, class_Name, fragment) {
//     const elm = document.createElement(element);
//     elm.className = class_Name;
//     if (elm.tagName === "IMG") {
//       elm.src = src;
//       elm.alt = "Image not found";
//     }
//     elm.innerText = txt;
//     fragment.append(elm);
//     return elm;
//   }
//   function events(documentOrWindow, event, functionName) {
//     return documentOrWindow.addEventListener(event, functionName);
//   }
//   events(mainContainer, "click", handleClickEvent);
// });

document.addEventListener("DOMContentLoaded", (event) => {
  const mainContainer = document.getElementById("main-container");
  const domFragment = document.createDocumentFragment();
  const imagesClass = document.getElementsByClassName(".images");
  const yesBtn = document.getElementsByClassName("yes");
  const noBtn = document.getElementsByClassName("no");
  const divContainer = document.getElementById("div-container");
  let arr = [];
  function scrollFunctinality() {
    let Imagecount = 0;

    for (let i = 1; i <= 9; i++) {
      const randomImage = Math.floor(Math.random(i) * 1000);
      const images = createEl(
        "img",
        `https://picsum.photos/seed/picsum${randomImage}/400/350`,
        null,
        "images",
        domFragment
      );
      Imagecount++;
      arr.push(images.src);
    }
    mainContainer.append(domFragment);
  }
  scrollFunctinality();
  function handleScrollEvent(event) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      scrollFunctinality();
    }
  }
  function handleClickEvent(event) {
    event.preventDefault();
    const target = event.target;
    const sliderContainer = document.querySelector(".slider-container");
    const closeBtn = document.querySelector(".fa-xmark");
    const selectedImg = document.querySelector(".selected-img");
    const divContainer = document.getElementById("div-container");
    const promptContainer = document.querySelector(".prompt-container");
    const leftButton = document.querySelector("fa-chevron-left");
    const rightButton = document.querySelector("fa-chevron-right");
    mainContainer.classList.add("remove-pointer");
    function showImageOnClick() {
      let result;
      for (let i = 0; i < arr.length; i++) {
        if (target.src === arr[i]) {
          result = arr[i];
        }
      }
      return result;
    }
    switch (target.tagName) {
      case "IMG":
        createEl("div", null, null, "slider-container", mainContainer);
        createEl("i", null, null, "fa-solid fa-xmark", mainContainer);
        createEl("i", null, null, "fa-solid fa-chevron-left", mainContainer);
        createEl("i", null, null, "fa-solid fa-chevron-right", mainContainer);
        const images = createEl(
          "img",
          `${showImageOnClick()}`,
          null,
          "images selected-img",
          mainContainer
        );
        break;
      case "I":
        if (sliderContainer) {
          if (target.className === "fa-solid fa-xmark") {
            sliderContainer.classList.add("slider-buffer");
            selectedImg.classList.add("slider-buffer");
            closeBtn.classList.add("slider-buffer");
            leftButton.classList.add("slider-buffer");
            rightButton.classList.add("slider-buffer");
          } else {
            sliderContainer.classList.remove("slider-buffer");
            selectedImg.classList.remove("slider-buffer");
            closeBtn.classList.remove("slider-buffer");
            leftButton.classList.remove("slider-buffer");
            rightButton.classList.remove("slider-buffer");
          }
        }
        if (promptContainer) {
          if (target.className === "fa-solid fa-xmark prompt-i") {
            promptContainer.style.visibility = "hidden";
          } else {
            promptContainer.style.visibility = "visible";
          }
        }
        break;
      case "BUTTON":
        if (target.innerText === "Yes") {
          getNumOfPics(target.innerText, divContainer);
          createEl("button", null, null, "prompt-button", divContainer);
        }
        break;
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
