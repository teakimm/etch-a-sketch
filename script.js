const grid = document.querySelector(".grid");
const slider = document.querySelector(".slider");
const resolution = document.querySelector(".resolution");
const colorPicker = document.querySelector(".color-picker");
const toggle = document.querySelector(".toggle");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow");

let mouseDown = false;
let border = true;
let isRainbow = false;
let isEraser = false;

function generateGrid(cols) {
  grid.style.setProperty('--grid-cols', cols);
  for(let i = 0; i < cols**2; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.id = i;
    if(border) {
      cell.style.border = "1px solid black";
    }
    cell.addEventListener("mouseover", draw);
    cell.addEventListener("mousedown", draw);
    grid.appendChild(cell);
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



grid.addEventListener('mousedown', e => {
  mouseDown = true;
  let elementId = e.target.id;
  let cell = document.getElementById(elementId);
  cell.style.backgroundColor = colorPicker.value;
});
grid.addEventListener('mouseup', e => {
  mouseDown = false;
});
grid.addEventListener("mouseover", e => {
  if(mouseDown) {
    let elementId = e.target.id;
    let cell = document.getElementById(elementId);
    cell.style.backgroundColor = colorPicker.value;
  }
}); 

function draw(e) {
  if(e.type === "mouseover" && !mouseDown) {
    return;
  } else if(isRainbow) {
    colorPicker.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = colorPicker.value;
  } else if(isEraser){
    colorPicker.value = "#FFFFFF";
    e.target.style.backgroundColor = colorPicker.value;
  } else {
    e.target.style.backgroundColor = colorPicker.value;
  }
}

toggle.addEventListener("click", e => {
  const toggle = document.querySelectorAll(".cell");
  if(border) {
    document.querySelector(".toggle").innerHTML = "Grid: OFF";
    toggle.forEach(cell => {
      cell.style.border = "none";
    });
    border = false;
  } else {
    document.querySelector(".toggle").innerHTML = "Grid: ON";
    toggle.forEach(cell => {
      cell.style.border = "1px solid black";
      border = true;
    });
  }
});
eraser.addEventListener("click", e => {
  if(isEraser) {
    isEraser = false;
    document.querySelector(".eraser").innerHTML = "Eraser: OFF";
  } else {
    isEraser = true;
    isRainbow = false;
    document.querySelector(".rainbow").innerHTML = "Rainbow: OFF";
    document.querySelector(".eraser").innerHTML = "Eraser: ON";
  }
  
});
clear.addEventListener("click", e => {
  const erase = document.querySelectorAll(".cell");
  erase.forEach(cell => {
    cell.remove();
  });
  generateGrid(slider.value);
});
rainbow.addEventListener("click", e => {
  if(isRainbow) {
    isRainbow = false;
    document.querySelector(".rainbow").innerHTML = "Rainbow: OFF";
  } else {
    isRainbow = true;
    isEraser = false;
    document.querySelector(".rainbow").innerHTML = "Rainbow: ON";
    document.querySelector(".eraser").innerHTML = "Eraser: OFF";
  }

});



  






