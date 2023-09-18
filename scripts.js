const easynav = document.getElementById("easy-nav"); //
const navoptions = document.getElementById("nav-options"); //
const plus = document.getElementById("plus");

let isRotated = false;

easynav.addEventListener("click", () => {
  navoptions.classList.toggle("show");
  isRotated = !isRotated;

  if (isRotated) {
    plus.style.transform = "rotate(-45deg)";
  } else {
    plus.style.transform = "rotate(0deg)";
  }
});

