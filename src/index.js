const slideupBtnEl = document.getElementById("slideup__btn");
const slideupContainerEl = document.getElementById("slideup__container");

let isUp = true;

slideupBtnEl.addEventListener("click", () => {
  if (isUp) {
    slideupContainerEl.classList.remove("slide-down-anim");
    slideupContainerEl.classList.add("slide-up-anim");
  } else {
    slideupContainerEl.classList.remove("slide-up-anim");
    slideupContainerEl.classList.add("slide-down-anim");
  }

  isUp = !isUp;
});
