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

function dotCreator(imageList = []) {
  const wrapper = document.querySelector(".dots");
  for (let index = 0; index < imageList.length - 2; index++) {
    const createDot = document.createElement("i");
    createDot.classList.add("bi", "bi-dot");

    wrapper.appendChild(createDot);
  }
  wrapper.children[0].classList.add("activeDot");
}

function toggleClassName(object, className, indexToAdd, indexToRemove) {
  object[indexToAdd].classList.add(className);
  object[indexToRemove].classList.remove(className);
}
function reveal() {
  const background = [document.querySelector(".bg-layer")];
  const frames = [...document.querySelector(".objects-wrapper").children];
  addClassOnScroll(frames, "frame");
  addClassOnScroll(background, "background", 300);
}

function slider() {
  const showcaseCarousel = document.querySelector(".carousel-slide");
  const showcaseImages = document.querySelectorAll(".carousel-slide img");
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");

  dotCreator(showcaseImages);
  const dotIcons = document.querySelectorAll("i.bi-dot");

  let counter = 1;
  const imageSize = showcaseImages[0].clientWidth;
  showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;

  // next button
  nextButton.addEventListener("click", function () {
    console.log(imageSize);

    if (counter >= showcaseImages.length - 1) return;
    if (counter < dotIcons.length) {
      // add class to current dot and remove previous one
      toggleClassName(dotIcons, "activeDot", counter, counter - 1);
    }
    showcaseCarousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;
  });
  // previous button
  prevButton.addEventListener("click", function () {
    if (counter <= 0) return;
    if (counter < dotIcons.length) {
      console.log(counter);
      // add class to current dot and remove previous one
      toggleClassName(dotIcons, "activeDot", counter - 1, counter);
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
      toggleClassName(dotIcons, "activeDot", counter - 1, 0);
    }
    if (showcaseImages[counter].id === "firstClone") {
      showcaseCarousel.style.transition = "none";
      counter = showcaseImages.length - counter;
      showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;

      // add class to first dot and remove from latest dot
      toggleClassName(dotIcons, "activeDot", counter - 1, dotIcons.length - 1);
      console.log("first");
      // dotIcons[counter - 1].classList.add("activeDot");
      // dotIcons[dotIcons.length - 1].classList.remove("activeDot");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
slider();
