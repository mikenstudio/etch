const container = document.querySelector(".sketch-box");
const generate = document.querySelector("#generate");
const message = document.querySelector("#message");
const eraserButton = document.querySelector("#eraser");
let eraser = false;
let mouseDown = false;

document.body.addEventListener("mousedown", () => {
  mouseDown = true;
});

document.body.addEventListener("mouseup", () => {
  mouseDown = false;
});

document.body.addEventListener("keyup", (e) => {
  console.log(e);
  if (e.key === "Enter") {
    generateGrid();
  }
});

generate.addEventListener("click", generateGrid);
eraserButton.addEventListener("click", toggleEraser);

function generateGrid() {
  eraserModeOff();
  const numRows = document.querySelector("#rows").value;
  console.log(numRows);
  if (numRows < 1 || numRows > 100) {
    message.innerText = "Enter a number between 1 and 100.";
    return;
  } else {
    message.innerText = "";
  }

  container.innerHTML = "";

  for (let i = 0; i < numRows; i++) {
    const newRow = document.createElement("div");
    newRow.className = "newRow";
    for (let j = 0; j < numRows; j++) {
      const newBlock = document.createElement("div");
      newBlock.className = "unclicked";
      newBlock.addEventListener("mousedown", (e) => {
        e.preventDefault();
        toggleSquare(e.target);
      });
      newBlock.addEventListener("mouseover", (e) => {
        e.preventDefault();
        if (mouseDown) {
          toggleSquare(e.target);
        }
      });
      newRow.appendChild(newBlock);
    }
    container.appendChild(newRow);
  }
}

function toggleSquare(block) {
  if (eraser) {
    block.classList.add("unclicked");
    block.classList.remove("clicked");
  } else {
    block.classList.add("clicked");
    block.classList.remove("unclicked");
  }
}

function eraserModeOn() {
  message.innerText = "Erase Mode ENABLED";
  eraser = true;
  eraserButton.innerText = "Toggle Eraser (On)";
}

function eraserModeOff() {
  message.innerText = "";
  eraser = false;
  eraserButton.innerText = "Toggle Eraser (Off)";
}

function toggleEraser() {
  if (eraser) {
    eraserModeOff();
  } else {
    eraserModeOn();
  }
}
