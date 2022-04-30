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

function reveal() {
  //   const frames = [...document.querySelectorAll("iframe")];
  const background = document.querySelector(".bg-layer");
  const frames = [
    ...document.querySelector(".objects-wrapper").children,
    background,
  ];
  //   console.log(wrapper);
  for (let i = 0; i < frames.length; i++) {
    let scrollValue = window.scrollY;
    const elementVisible = 500;
    if (scrollValue < elementVisible) {
      //       frame.classList.add("is-visible");
      frames[i].classList.add("is-visible");
      frames[i].classList.remove("is-hidden");
    } else {
      frames[i].classList.remove("is-visible");
      frames[i].classList.add("is-hidden");
    }
  }
}

window.addEventListener("scroll", reveal);
reveal();
