export function activateBtn(e) {
  const navBtns = document.querySelectorAll(".mainNav.btn");
  const canvasBtns = document.querySelectorAll(".canvasNav.btn");

  const removeActiveBtn = (btnGroup) => {
    btnGroup.forEach(btn => {
      if(btn.classList.contains("activeBtn")) {
        btn.classList.remove("activeBtn");
      }
    })
  }
  removeActiveBtn(canvasBtns);
  if(!e.target.classList.contains("canvasNav")) {
    removeActiveBtn(navBtns);
  }
  e.target.classList.add("activeBtn");
}