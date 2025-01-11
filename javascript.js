const container = document.querySelector("#container");
for (let x = 0; x < 16; x++) {
    const column = document.createElement("div");
    column.classList.add("column");
    column.style = "width: 6.25%";
    container.appendChild(column);
    for (let y = 0; y < 16; y++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("gridBox");
        column.appendChild(gridBox);

        gridBox.addEventListener("mouseover", () => {
            gridBox.classList.add("mouseOverGridBox");
        });
    }
}

const resizeBtn = document.querySelector("#resizeBtn");
resizeBtn.addEventListener("click", () => {
    let size = parseInt(prompt("Enter # of sqaures per side (1-100): "));
    if (size === NaN || size === 0 || size > 100) {
        alert("You entered an invalid value!");
    } else {
        //call function to clear gridbox
    }
});
