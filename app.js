let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

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

const resetGame = () => {
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
};

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

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  
};

const checkWinner = () => {
    for(pattern of winPattern) {
    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;
    
    if(post1Val != "" && post2Val != "" && post3Val != "") {
     
        if (post1Val === post2Val && post2Val === post3Val) {
        console.log("Winner", post1Val);
        msg.innerText = "Winner: " + post1Val;
        showWinner(post1Val);
       
        }
       }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);


