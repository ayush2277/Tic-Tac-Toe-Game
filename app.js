let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let newGame = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4 ,6],
    [3, 4, 5],
    [6, 7 ,8]
];


const resetGame = () => {
    turnX = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const enableBtn = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};



 const disableBtn = () => {
    for( let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, The Winner is "${winner}"`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
    for (let pattern of winPatterns){
    let postn1 = boxes[pattern[0]].innerText;
    let postn2 = boxes[pattern[1]].innerText;
    let postn3 = boxes[pattern[2]].innerText;

    if(postn1 != "" && postn2 != "" && postn3 != "" ){
        if(postn1 === postn2 && postn2 === postn3){
            showWinner(postn1);
        }
     }
  }
}


newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);