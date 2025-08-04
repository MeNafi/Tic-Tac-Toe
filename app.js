let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");

let turnO = true; // playerX, playerY

const winPattern = [

  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6]

];

boxes.forEach ((box) => {

    box.addEventListener("click", () => {
        console.log("box was clicked");
      
        if(turnO) {
            // for player O
            box.innerText = "O";
            turnO = false;
        }
        else {
            // for player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;  // disable the box after click
    
        checkWinner();
    });
});

const checkWinner = () => {
    for(pattern of winPattern) {
    console.log(pattern);
    }
}