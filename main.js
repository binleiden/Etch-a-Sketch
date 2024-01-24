let color = "black";
let click = false;


document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
   
    document.querySelector("body").addEventListener("click", function(e){
        if (e.target.tagName != "button"){
            click = !click;
            let draw = document.querySelector("#draw");
            if (click){
                draw.innerHTML = "lets draw";
            }else {
                draw.innerHTML = "to bad!"
            }
        }

    })
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
    
    console.log("etch a sketch")
})
// function for creating board
function createBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    for (let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        div.style.backgroundColor = `blue`
        board.insertAdjacentElement("beforeend", div);

    }
}
// function for board size
function getSize(){
    let input = prompt("Choose board size");
    let message = document.querySelector("#message");
    if (input == ""){
        message.innerHTML = "Please enter a grid number"
    } else if (input < 0 || input >100){
        message.innerHTML = "Choose a number between 1 and 100!"
    } else {
        message.innerHTML = "Lets Etch a sketch!"
        return input;
    };
}

function colorDiv() {
    if (click){
    if (color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor =`black`
    }
}
}

function setColor(colorChoice) {
    color = colorChoice;
}

function reset(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor =`white`)
}