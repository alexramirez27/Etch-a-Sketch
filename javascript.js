const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

const btn = document.createElement("button");
btn.textContent = "Change Grid Size";
btn.style.fontSize = "28px";
btn.style.width = "350px";
btn.style.marginTop = "10px";
btn.style.padding = "10px 0";
body.appendChild(btn);

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.marginTop = "25px";
body.appendChild(container);

function getRandomColor() {
    let symbols = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) { 
       color += symbols[Math.floor(Math.random() * 16)]; 
    }
    return color;
}

function buildGrid(size) {
    let opacityArray = [];
    for (let row = 0; row < size; row++) {
        let rowOpacityArray = [];
        const rowContainer = document.createElement("div");
        rowContainer.style.display = "flex";
        rowContainer.style.width = "auto";
        rowContainer.classList.add("row-container");
        container.appendChild(rowContainer);
        for (let col = 0; col < size; col++) {
            rowOpacityArray.push(0);
            const cell = document.createElement("div");
            cell.style.width = "25px";
            cell.style.height = "25px";
            cell.style.border = "1px solid black";
            cell.style.backgroundColor = "white";
            cell.addEventListener("mouseenter", () => {
                cell.style.cursor = "pointer";
                cell.style.backgroundColor = getRandomColor();
                if (opacityArray[row][col] === 0) {
                    opacityArray[row][col] += 0.1;
                    cell.style.opacity = opacityArray[row][col];
                } else if (opacityArray[row][col] < 1){
                    opacityArray[row][col] += 0.1;
                    cell.style.opacity = opacityArray[row][col];
                }
            });
            rowContainer.appendChild(cell);
        }
        opacityArray.push(rowOpacityArray);
    }
}

buildGrid(16);

function destroyGrid() {
    nodeList = container.querySelectorAll(".row-container");
    for (const node of nodeList) {
        container.removeChild(node);
    }
}

btn.addEventListener("click", () => {
    body.removeChild(container);
    destroyGrid();
    let input = Number(prompt("Please enter the number of squares per side for the new grid"));
    if (input < 100) {
        buildGrid(input);
    } else {
        buildGrid(100);
    }
    body.appendChild(container);
});