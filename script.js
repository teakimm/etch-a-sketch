const grid = document.getElementsByClassName("grid")[0];
const slider = document.getElementsByClassName("slider")[0];
const resolution = document.getElementsByClassName("resolution")[0];
const colorPicker = document.getElementsByClassName("color-picker")[0];

function generateGrid(cols) {
  grid.style.setProperty('--grid-cols', cols);
  for(let i = 0; i < cols**2; i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell).className = "cell";
  }
}
generateGrid(16);

function setResolution() {
  const erase = document.querySelectorAll(".cell");
  erase.forEach(cell => {
    cell.remove();
  });
  generateGrid(slider.value);
  resolution.innerHTML = "Resolution: " + slider.value + " x " + slider.value;
}

function color() {
  document.body.style.color = "black";
  return false;
}
document.getElementsByClassName("cell")[0].onclick = color();







