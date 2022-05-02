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

function slider() {
  const showcaseCarousel = document.querySelector(".carousel-slide");
  const showcaseImages = document.querySelectorAll(".carousel-slide img");
  const prevButton = document.querySelector("#prevButton");
  const nextButton = document.querySelector("#nextButton");

  let counter = 1;
  const imageSize = showcaseImages[0].clientWidth;

  showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;

  nextButton.addEventListener("click", function () {
    if (counter >= showcaseImages.length - 1) return;

    showcaseCarousel.style.transition = "transform 0.4s ease-in-out";
    counter++;
    showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;
  });

  prevButton.addEventListener("click", function () {
    if (counter <= 0) return;
    showcaseCarousel.style.transition = "transform 0.4s ease-in-out";
    counter--;
    showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;
  });

  showcaseCarousel.addEventListener("transitionend", function () {
    if (showcaseImages[counter].id === "lastClone") {
      showcaseCarousel.style.transition = "none";
      counter = showcaseImages.length - 2;
      showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;
    }
    if (showcaseImages[counter].id === "firstClone") {
      showcaseCarousel.style.transition = "none";
      counter = showcaseImages.length - counter;
      showcaseCarousel.style.transform = `translateX(${-imageSize * counter}px`;
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();
slider();
