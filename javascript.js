const container = document.querySelector("#container");
let traceColor = "black";

function formGrid(size) {
    for (let x = 0; x < size; x++) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.style = `width: ${100/size}%`;
        container.appendChild(column);
        for (let y = 0; y < size; y++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridBox");
            gridBox.style = `height: ${100/size}%`;
            column.appendChild(gridBox);

            gridBox.addEventListener("mouseover", () => {
                if (traceColor === "black") {
                    gridBox.style.backgroundColor = "black";
                } else {
                    gridBox.style.backgroundColor = `rgb(${randomColorGen()}, ${randomColorGen()}, ${randomColorGen()})`;
                }
            });
        }
    }

    function randomColorGen () {
        return Math.floor(Math.random() * 256);
    }
}

const resizeBtn = document.querySelector("#resizeBtn");
resizeBtn.addEventListener("click", () => {
    let size = parseInt(prompt("Enter # of sqaures per side (1-100): "));
    if (isNaN(size) || size === 0 || size > 100) {
        alert("You entered an invalid value!");
    } else {
        clearGrid();
        formGrid(size);
    }
});

const blackBtn = document.querySelector("#blackBtn");
blackBtn.addEventListener("click", () => {
    traceColor = "black";
});

const multiColorBtn = document.querySelector("#multiColorBtn");
multiColorBtn.addEventListener("click", () => {
    traceColor = "multi";
})

const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
    const gridBoxes = document.querySelectorAll(".gridBox");
    gridBoxes.forEach((box) => {
        box.style.backgroundColor = "whitesmoke";
    })
});

function clearGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }
}

/** Start with default 16x16 grid */
formGrid(16);