const imageList = document.querySelectorAll(".caurosel-image");
const mainImage = document.querySelector(".main-image img");
const leftArrow = document.querySelector("#left-arrow");
const rightArrow = document.querySelector("#right-arrow");
let current = 0;

function displayImage() {
  imageList.forEach(item => item.classList.remove("active-image"));
  this.classList.add("active-image");
  let displaying = this.getAttribute("src");
  mainImage.setAttribute("src", displaying);
}

imageList.forEach(item => item.addEventListener("click", displayImage));

function slideLeft() {
  imageList.forEach(item => item.classList.remove("active-image"));
  if (current === 0) {
    current = imageList.length;
  }
  current = current-1;
  imageList[current].classList.add("active-image");
  let displaying = imageList[current].getAttribute("src");
  mainImage.setAttribute("src", displaying);
}

function slideRight() {
  imageList.forEach(item => item.classList.remove("active-image"));
  if (current === imageList.length - 1) {
    current = -1;
  }
  current = current+1;
  imageList[current].classList.add("active-image");
  let displaying = imageList[current].getAttribute("src");
  mainImage.setAttribute("src", displaying);
}

leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);