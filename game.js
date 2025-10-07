// game logic


class Game {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    currentTurn = "X";
    turnN = 0;
    moveHistory = [];
    occupiedX = [];
    occupiedO = [];
    winner = null;
    winningStreak = null;
    gameFinished = false;

    constructor() {
        console.log(this.board);
    }

    setTurn(player) {
        if(player == "X" || player == "O") {
            this.turn = player;
        } else {
            return "player symbol is not correct";
        }
    }

    move(position) {
        // 0 = free, "X" || "O" = occupied
        let positionValue = this.board[position]
        if(positionValue == 0) {
            
            // actual move on board
            this.board[position] = this.currentTurn;
            // update move history
            this.moveHistory.push({
                "player": this.currentTurn,
                "position": positionValue
            });
            this.turnN++;
            
            // prepare next move
            if(this.currentTurn == "X") {
                this.occupiedX.push(position);
                this.currentTurn = "O";
            } else {  // this.currentTurn == "O"
                this.occupiedO.push(position);
                this.currentTurn = "X";
            }

            // check if there is a winner or next move is possible
            console.log(this.board);
            this.endOfGame();

            if(this.winner || this.gameFinished) {
                return [this.moveHistory.at(-1).player, false];
            }

            return [this.moveHistory.at(-1).player, true];

        } else if(positionValue == "X" || positionValue == "O") {
            return ["", false];
        } else {
            console.error("Move Error => position value error")
            return ["", false];
        }
    }

    endOfGame() {

        // earliest win only at move 5 possible
        if(!(this.turnN >= 5)) {
            return;
        }

        // calculate if someone won
        const potentialWinner = this.moveHistory.at(-1).player;
        const occupiedPlayer = potentialWinner == "X" ? this.occupiedX : this.occupiedO;
        // console.log(occupiedPlayer);
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        
        for(let streak of wins) {
            const potentialWin = [false, false, false];
            for(let streakIndex in streak) {
                for(let k of occupiedPlayer) {
                    if(k == streak[streakIndex]) {
                        potentialWin[streakIndex] = true;
                        break;
                    }
                }
            }
            if(!potentialWin.includes(false)) {
                this.winner = potentialWinner;
                this.winningStreak = streak;
            }
        }

        // no moves are possible
        for(let value of this.board) {
            if(value == 0) {
                return;
            }
        }
        this.gameFinished = true;
    }
}


