// function frameSelect() {
//   const iframe = [...document.querySelectorAll("iframe")];
//   let scrollPos = 500;
//   console.log(iframe);
//   function checkPosition(frame) {
//     console.log("check");
//     let windowY = window.scrollY;
//     if (windowY <= scrollPos) {
//       // Scrolling UP
//       frame.classList.add("is-visible");
//       frame.classList.remove("is-hidden");
//     } else {
//       // Scrolling DOWN
//       frame.classList.add("is-hidden");
//       frame.classList.remove("is-visible");
//     }
//     scrollPos = windowY;
//   }
//   iframe.forEach((frame) => {
//     frame.addEventListener("scroll", checkPosition(frame));
//   });
// }

// document.addEventListener("scroll", frameSelect);
// // window.onload(frameSelect);

function addClass(objectsArray, name, elementVisible = 500) {
  const objects = Array.from(objectsArray);

  for (let i = 0; i < objects.length; i++) {
    let scrollValue = window.scrollY;
    // const elementVisible = 500;
    if (scrollValue < elementVisible) {
      objects[i].classList.add(`is-visible-${name}`);
      objects[i].classList.remove(`is-hidden-${name}`);
    } else {
      objects[i].classList.remove(`is-visible-${name}`);
      objects[i].classList.add(`is-hidden-${name}`);
    }
  }
}
function reveal() {
  //   const frames = [...document.querySelectorAll("iframe")];
  const background = [document.querySelector(".bg-layer")];
  const frames = [...document.querySelector(".objects-wrapper").children];
  addClass(frames, "frame");
  addClass(background, "background", 300);
  //   console.log(wrapper);
  // for (let i = 0; i < frames.length; i++) {
  //   let scrollValue = window.scrollY;
  //   const elementVisible = 500;
  //   if (scrollValue < elementVisible) {
  //     //       frame.classList.add("is-visible");
  //     frames[i].classList.add("is-visible");
  //     frames[i].classList.remove("is-hidden");
  //   } else {
  //     frames[i].classList.remove("is-visible");
  //     frames[i].classList.add("is-hidden");
  //   }
  // }
}

window.addEventListener("scroll", reveal);
reveal();
