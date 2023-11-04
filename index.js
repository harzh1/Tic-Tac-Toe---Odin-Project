const myArray = ["", "", "", "", "", "", "", "", ""];
let player1Name ="John"
let player2Name ="Harry"
let player1Symbol ="X"
let player2Symbol ="O"
let playerName = player1Name
let playerSymbol = player1Symbol;
let gameEnded = false;


class User {
    name1 = prompt("Player 1 Name, please?", "John");
    symbol1 = prompt("Select Symbol eg. X or O", "X")
    name2 = prompt("Player 2 Name, please?", "John");
    symbol2 = prompt("Select Symbol eg. X or O", "O")

  }

  
  
  let user = new User();
  player1Name=user.name1;
  player1Symbol=user.symbol1;
  player2Name=user.name2;
  player2Symbol=user.symbol2;


for (let i = 0; i < 9; i++) {
    document.getElementById((i + 1).toString()).addEventListener(
        "click",
        function() {
            if (myArray[i] === "" && !gameEnded) {
                myArray[i] = playerSymbol;
                this.innerHTML = myArray[i];
                this.classList.add(myArray[i].toLowerCase());

                if (checkWin()) {
                    gameEnded = true;
                    playerName = playerSymbol===player1Symbol?player1Name:player2Name;

                   alert( playerName + " wins!");
                   
                }

                changeSymbol();
            }
        }
    );
}




function reset(){
    for (let i = 0; i < 9; i++) {
        myArray[i] = "";
        const cell = document.getElementById((i + 1).toString());
        cell.innerHTML = "";
        cell.classList.remove("x", "o");
    }
    
    let user = new User();
  player1Name=user.name1;
  player1Symbol=user.symbol1;
  player2Name=user.name2;
  player2Symbol=user.symbol2;
  playerName = player1Name
  playerSymbol = player1Symbol;
 
   
    gameEnded = false;
}




function checkWin() {
    if (
        (myArray[0] === playerSymbol && myArray[1] === playerSymbol && myArray[2] === playerSymbol) ||
        (myArray[3] === playerSymbol && myArray[4] === playerSymbol && myArray[5] === playerSymbol) ||
        (myArray[6] === playerSymbol && myArray[7] === playerSymbol && myArray[8] === playerSymbol) ||
        (myArray[0] === playerSymbol && myArray[3] === playerSymbol && myArray[6] === playerSymbol) ||
        (myArray[1] === playerSymbol && myArray[4] === playerSymbol && myArray[7] === playerSymbol) ||
        (myArray[2] === playerSymbol && myArray[5] === playerSymbol && myArray[8] === playerSymbol) ||
        (myArray[0] === playerSymbol && myArray[4] === playerSymbol && myArray[8] === playerSymbol) ||
        (myArray[2] === playerSymbol && myArray[4] === playerSymbol && myArray[6] === playerSymbol)
    ) {
        return true;
    }

    return false;
}

function changeSymbol() {
    playerSymbol = playerSymbol === player1Symbol ? player2Symbol : player1Symbol;
}
