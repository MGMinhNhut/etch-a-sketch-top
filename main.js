const container = document.querySelector(".container");

const reloadGrid = document.createElement("button");
reloadGrid.textContent = "New Grid";
reloadGrid.classList.add("reload");
document.body.appendChild(reloadGrid);

reloadGrid.addEventListener("click", () => {
    while(true){
        const sizeInput = prompt("Please enter a new grid size: ");
        if(sizeInput > 0 && sizeInput <= 100){
            makeDivs(sizeInput);
            break;
        }
        else{
            alert("Please enter a number between 0 and 100!");
        }
    }
})
function makeDivs(numDivs){
    container.innerHTML = "";
    const cellSize = `${100/numDivs}%`;

    const fragment = document.createDocumentFragment();

    const totalCells = numDivs*numDivs;
    for(let d = 0; d < totalCells; d++){
        let cells = document.createElement("div");
        cells.classList.add("pixel");

        cells.style.width=cellSize;
        cells.style.height=cellSize;
        fragment.appendChild(cells);
    }
    container.appendChild(fragment);
}

container.addEventListener("mouseover", (e) =>{
    if(e.target.classList.contains("pixel")){
        e.target.style.backgroundColor = "gray";
    }
})

makeDivs(16);