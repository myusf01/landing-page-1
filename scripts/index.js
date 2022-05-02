function addClassOnScroll(objectsArray, name, elementVisible = 500) {
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
  const background = [document.querySelector(".bg-layer")];
  const frames = [...document.querySelector(".objects-wrapper").children];
  addClassOnScroll(frames, "frame");
  addClassOnScroll(background, "background", 300);
}
function dotCreator(imageList = []) {
  const wrapper = document.querySelector(".dots");
  for (let index = 0; index < imageList.length - 2; index++) {
    const createDot = document.createElement("i");
    createDot.classList.add("bi", "bi-dot");

    wrapper.appendChild(createDot);
  }
  wrapper.children[0].classList.add("activeDot");
}

function slider() {
  const showcaseCarousel = document.querySelector(".carousel-slide");
  const showcaseImages = document.querySelectorAll(".carousel-slide img");
  dotCreator(showcaseImages);
  const dotIcons = document.querySelectorAll("i.bi-dot");
  const dots = document.querySelector(".dots").children;
  console.log(dotIcons, dots);
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");

  let counter = 1;
  const imageSize = showcaseImages[0].clientWidth;

  showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;

  nextButton.addEventListener("click", function () {
    if (counter >= showcaseImages.length - 1) return;
    if (counter < dotIcons.length) {
      // add class to current dot and remove previous one

      dotIcons[counter].classList.add("activeDot");
      dotIcons[counter - 1].classList.remove("activeDot");
    }
    showcaseCarousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;
  });

  prevButton.addEventListener("click", function () {
    if (counter <= 0) return;
    if (counter < dotIcons.length) {
      // add class to current dot and remove previous one

      dotIcons[counter - 1].classList.add("activeDot");
      dotIcons[counter].classList.remove("activeDot");
    }

    showcaseCarousel.style.transition = "transform 0.4s ease-in-out";
    counter--;
    showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;
  });

  showcaseCarousel.addEventListener("transitionend", function () {
    if (showcaseImages[counter].id === "lastClone") {
      showcaseCarousel.style.transition = "none";
      counter = showcaseImages.length - 2;
      showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;

      // add class to latest dot and remove from first dot
      dotIcons[0].classList.remove("activeDot");
      dotIcons[counter - 1].classList.add("activeDot");
    }
    if (showcaseImages[counter].id === "firstClone") {
      showcaseCarousel.style.transition = "none";
      counter = showcaseImages.length - counter;
      showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;

      // add class to first dot and remove from latest dot
      dotIcons[counter - 1].classList.add("activeDot");
      dotIcons[dotIcons.length - 1].classList.remove("activeDot");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
slider();
