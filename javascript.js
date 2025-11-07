const container = document.querySelector(".container");

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.marginTop = "40px";

// const p = document.createElement("p");
// p.textContent = "Test text";

// div.appendChild(p);

for (let row = 0; row < 16; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.style.display = "flex";
    rowContainer.style.width = "800px";
    rowContainer.style.border = row % 2 === 0 ? "2px solid red" : "2px solid yellow";
    container.appendChild(rowContainer);
    for (let col = 0; col < 16; col++) {
        const cell = document.createElement("div");
        cell.style.width = "50px";
        cell.style.height = "50px";
        cell.style.backgroundColor = col % 2 === 0 ? "blue" : "green";
        rowContainer.appendChild(cell);
    }
}