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
  if(e.target.classList.contains("CanvasNavbar")) {
    removeActiveBtn(canvasBtns);
    console.log(canvasBtns);
  } else {
    removeActiveBtn(navBtns);
    console.log(navBtns);
  }
  e.target.classList.add("activeBtn");
}