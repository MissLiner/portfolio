export function activateBtn(e) {
  const navBtns = document.querySelectorAll(".Navbar.btn");
  const canvasBtns = document.querySelectorAll(".Canvas.btn");

  const removeActiveBtn = (btnGroup) => {
    btnGroup.forEach(btn => {
      if(btn.classList.contains("activeBtn")) {
        btn.classList.remove("activeBtn");
      }
    })
  }
  removeActiveBtn(canvasBtns);
  if(!e.target.classList.contains("CanvasNavbar")) {
    removeActiveBtn(navBtns);
  }
  e.target.classList.add("activeBtn");
}