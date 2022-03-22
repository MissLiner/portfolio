export function activateBtn(e) {
  const navBtns = document.querySelectorAll(".Navbar, .btn");
  const canvasBtns = document.querySelectorAll(".Canvas, .btn");

  const removeActiveBtn = (btnGroup) => {
    btnGroup.forEach(btn => {
      if(btn.classList.contains("activeBtn")) {
        btn.classList.remove("activeBtn");
      }
    })
  }
  if(e.target.classList.contains("Navbar")) {
    removeActiveBtn(navBtns);
  } else {
    removeActiveBtn(canvasBtns);
  }
  e.target.classList.add("activeBtn");
}