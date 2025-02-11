document.addEventListener("DOMContentLoaded", function () {
    const words = ["PYTHON", "GITHUB", "CROSSWORD"];
    const hints = ["Programmeertaal", "Platform voor ontwikkelaars", "Soort puzzel"];
    const gridContainer = document.getElementById("grid");
    const hintsContainer = document.getElementById("hints");

    // Grid genereren
    words.forEach((word, rowIndex) => {
        word.split("").forEach((letter, colIndex) => {
            const cell = document.createElement("input");
            cell.type = "text";
            cell.maxLength = 1;
            cell.classList.add("cell");
            cell.dataset.letter = letter;
            gridContainer.appendChild(cell);
        });
    });

    gridContainer.style.gridTemplateColumns = `repeat(${words[0].length}, 40px)`;

    // Hints toevoegen
    hints.forEach((hint, index) => {
        const hintElement = document.createElement("p");
        hintElement.innerHTML = `<strong>Hint ${index + 1}:</strong> ${hint}`;
        hintsContainer.appendChild(hintElement);
    });
});

function checkSolution() {
    let cells = document.querySelectorAll(".cell");
    let correct = true;
    cells.forEach(cell => {
        if (cell.value.toUpperCase() !== cell.dataset.letter) {
            correct = false;
        }
    });
    document.getElementById("result").innerText = correct ? "Correct!" : "Probeer opnieuw.";
}
