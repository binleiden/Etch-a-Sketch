document.addEventListener("DOMContentLoaded", function(){
   
    console.log("etch a sketch")
})

function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = "repeat(`${size}`, 1fr)";
    board.style.gridTemplateRows = "repeat(`${size}`, 1fr)";

    let numberDivs = size * size;
    for (let i=0; numberDivs; i++){
        let div = document.createElement("div");
        
        board.insertAdjacentElement("beforeend", div);

    }
}