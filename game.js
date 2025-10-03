// game logic


class Game {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    currentTurn = "X";
    turnN = 0;
    moveHistory = [];

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
            this.turnN++;
            this.board[position] = this.currentTurn;
            
            const oldTurn = this.currentTurn;
            this.currentTurn = this.currentTurn == "X" ? "O" : "X";

            // update move history
            this.moveHistory.push({
                "player": this.currentTurn,
                "position": positionValue
            });
            
            console.log(this.board);
            this.endOfGame();

            return this.moveHistory.at(-1).player;

        } else if(positionValue == "X" || positionValue == "O") {
            return false;
        } else {
            console.error("Move Error => position value error")
            return false;
        }
    }

    endOfGame() {

        // earliest win only at move 5 possible
        if(!(this.turnN >= 5)) {
            return;
        }

        // calculate if someone won
        const potentialWinner = this.moveHistory.at(-1).player;
        

        // no moves are possible

    }
}


