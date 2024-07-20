let images = document.querySelectorAll(".images");
let player_score = document.querySelector("#you_score");
let computer_score = document.querySelector("#com_score");
let tie_text = document.querySelector(".display_text");
let win_text = document.querySelector(".win_text");
let loose_text = document.querySelector(".loose_text");

let random;
let winPlayer = 0;
let winComputer = 0;



let changeText = (computerMove) =>{
    let computerText;
    if(computerMove == 0){
        computerText="rock";
    }
    else if(computerMove == 1){
        computerText = "paper";
    }
    else{
        computerText = "scissor";
    }
    return computerText;
}

let checkForWinner = (playerMove,computerText) => {
    if((computerText === playerMove )){
        console.log("Tie!");
        displayTie();
   }

   else if(computerText == "rock" && playerMove == "scissor"){
        // console.log("He he! I win! Rock beats scissor");
        winComputer++;
        // console.log(`Computer Move ${winComputer}`);
        // console.log(`Player Move ${winPlayer}`);
        displayComputerWin(playerMove,computerText);
        
    }

   else if(computerText == "paper" && playerMove == "rock"){
        // console.log("He he! I win! Paper beats rock");
        winComputer++
        // console.log(`Computer Move ${winComputer}`);
        // console.log(`Player Move ${winPlayer}`);
        displayComputerWin(playerMove,computerText);
   }

   else if(computerText == "scissor" && playerMove == "paper"){
        // console.log("He he! I win! scissor beats paper");
        winComputer++
        // console.log(`Computer Move ${winComputer}`);
        // console.log(`Player Move ${winPlayer}`);
        displayComputerWin(playerMove,computerText);
   }

   else{
        // console.log(`Shhh! You Win! ${playerMove} beats ${computerText}`);
        winPlayer++;
        // console.log(`Computer Move ${winComputer}`);
        // console.log(`Player Move ${winPlayer}`);
        displayPlayerWin(playerMove, computerText );
   }
}

let displayTie = () =>{
    tie_text.classList.remove("hidden");
    win_text.classList.add("hidden");
    loose_text.classList.add("hidden");
};

let displayPlayerWin = (playerMove, computerText) => {
    player_score.innerText = winPlayer;
    win_text.classList.remove("hidden");
    loose_text.classList.add("hidden");
    tie_text.classList.add("hidden");
    win_text.innerText = `You Win! ${playerMove} beats ${computerText}`
};


let displayComputerWin = (playerMove,computerText ) => {
    computer_score.innerText = winComputer;
    win_text.classList.add("hidden");
    loose_text.classList.remove("hidden");
    tie_text.classList.add("hidden"); 
    loose_text.innerText = `I Win! ${playerMove} beats ${computerText}`
};

images.forEach((image) => {
    image.addEventListener("click", () => {
        // console.log("button was clicked");
        let playerMove = image.classList[0];
        let computerMove = Math.floor(Math.random() * 3);  /*Math.floor because Math.random gives floating value b/w 0 to 1*/
        let computerText = changeText(computerMove);
      
        
       console.log(computerMove);
       checkForWinner(playerMove, computerText);
       
    });
});