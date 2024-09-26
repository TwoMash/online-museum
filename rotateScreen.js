export function rotateScreen() {
  const rotatePopup = document.querySelector(".rotate");
  function checkScreenOrientation() {
    if (screen.width < 900 && screen.width / screen.height > 1.4) {
      rotatePopup.style.display = "flex";
    } else {
      rotatePopup.style.display = "none";
    }
  }
  window.addEventListener("load", checkScreenOrientation);
  window.addEventListener("resize", checkScreenOrientation);
}
