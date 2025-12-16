const container = document.querySelector("#container");
const containerWidth = container.clientWidth;

function checkPx (humanInput) {
    if (humanInput <= 100 && humanInput > 0) {
        createGridItems(humanInput); 
    } else{
        alert("Erro!!!");
    }
}

function createGridItems(userInput) {
    container.innerText= "";
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
            let num1 = generateRgb();
            let num2 = generateRgb();
            let num3 = generateRgb();
            square.style.backgroundColor = `rgb( ${num1}, ${num2}, ${num3})`;
        });
    }
}

const buttonGrid = document.querySelector(".button");
buttonGrid.addEventListener("click",(event) => {
    let userInput = prompt("Answer the number of squares per side for the new grid: ")
    checkPx(userInput)
})

function generateRgb() {
    return Math.floor(Math.random() * 256); 
}