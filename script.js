const puzzleData = {
    grid: [
        ["B", "L", "A", "N", "K", null, "H", "I", "N", "T"],
        [null, null, "C", "O", "D", "E", null, null, "P", "U"],
        ["D", "A", "T", "A", null, "G", "A", "M", "E", null]
    ],
    hints: [
        { number: 1, hint: "Iets zonder inhoud", direction: "horizontal" },
        { number: 2, hint: "Programmeertaal", direction: "horizontal" },
        { number: 3, hint: "Informatie", direction: "horizontal" }
    ]
};

document.addEventListener("DOMContentLoaded", function () {
    const puzzleContainer = document.getElementById("puzzle-container");
    const hintsContainer = document.getElementById("hints");
    
    puzzleContainer.style.gridTemplateColumns = `repeat(${puzzleData.grid[0].length}, 40px)`;
    
    puzzleData.grid.forEach(row => {
        row.forEach(cell => {
            const cellElement = document.createElement("input");
            cellElement.type = "text";
            cellElement.maxLength = 1;
            cellElement.classList.add("cell");
            if (cell === null) {
                cellElement.classList.add("black-cell");
                cellElement.disabled = true;
            }
            puzzleContainer.appendChild(cellElement);
        });
    });
    
    puzzleData.hints.forEach(hint => {
        const hintElement = document.createElement("p");
        hintElement.innerHTML = `<strong>${hint.number}:</strong> ${hint.hint}`;
        hintsContainer.appendChild(hintElement);
    });
});

function checkSolution() {
    let cells = document.querySelectorAll(".cell:not(.black-cell)");
    let correct = true;
    let index = 0;
    puzzleData.grid.forEach(row => {
        row.forEach(cell => {
            if (cell !== null) {
                if (cells[index].value.toUpperCase() !== cell) {
                    correct = false;
                }
                index++;
            }
        });
    });
    document.getElementById("result").innerText = correct ? "Correct!" : "Probeer opnieuw.";
}
