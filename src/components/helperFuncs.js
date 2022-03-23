export function removeActiveBtn(btnGroup) {
  btnGroup.forEach(btn => {
    if(btn.classList.contains("activeBtn")) {
      btn.classList.remove("activeBtn");
    }
  })
}
export function removeAllActive() {
  const allBtns = document.querySelectorAll(".btn");
  removeActiveBtn(allBtns);
}
export function activateBtn(e) {
  const navBtns = document.querySelectorAll(".mainNav.btn");
  const canvasBtns = document.querySelectorAll(".canvasNav.btn");

  removeActiveBtn(canvasBtns);
  if(!e.target.classList.contains("canvasNav")) {
    removeActiveBtn(navBtns);
  }
  e.target.classList.add("activeBtn");
}