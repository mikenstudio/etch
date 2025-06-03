const container = document.querySelector(".sketch-box");
const generate = document.querySelector("#generate");
const message = document.querySelector("#message");

generate.addEventListener("click", (e) => {
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
      newRow.appendChild(newBlock);
    }
    container.appendChild(newRow);
  }
});
