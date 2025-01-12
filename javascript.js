const container = document.querySelector("#container");
let traceColor = "black";

function formGrid(size) {
    for (let x = 0; x < size; x++) {
        const column = document.createElement("div");
        container.appendChild(column);
        for (let y = 0; y < size; y++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("gridBox");
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
    let size = prompt("Enter # of sqaures per side (1-100): ");
    if (!size) {
        return;
    } else if (isNaN(size) || parseInt(size) === 0 || parseInt(size) > 100) {
        alert("You entered an invalid value!");
    } else {
        clearGrid();
        formGrid(size);
    }
});

const blackBtn = document.querySelector("#blackBtn");
blackBtn.addEventListener("click", () => {
    traceColor = "black";
    blackBtn.classList.add("enabled");
    multiColorBtn.classList.remove("enabled");
});

const multiColorBtn = document.querySelector("#multiColorBtn");
multiColorBtn.addEventListener("click", () => {
    traceColor = "multi";
    multiColorBtn.classList.add("enabled");
    blackBtn.classList.remove("enabled");
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