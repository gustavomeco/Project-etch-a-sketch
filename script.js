const container = document.querySelector("#container");
const containerWidth = container.clientWidth;


function createGridItems(userInput) {
    const gridPx = userInput * userInput;
    const size = containerWidth / userInput;
    // /calculate the size of each grid item by getting the width of the container divided by the number of squares in a row

    for (let i = 0; i < gridPx; i++) {
        let square = document.createElement("div");
        square.classList.add("block");

        square.style.width = size + 'px';
        square.style.height = size + 'px';
        container.appendChild(square);
        square.addEventListener("mouseenter",(event) => {
            square.style.backgroundColor = "black";
        });
    }
}

let userInput = prompt("Answer the number of squares per side for the new grid: ")
createGridItems(userInput);
