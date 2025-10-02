// game logic


class Game {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    currentTurn = "X";
    turnN = 0;

    constructor() {

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
        boardPosition = this.board[position]
        if(boardPosition == 0) {
            turnN++;
            this.board[position] = this.currentTurn;
            
            const oldTurn = this.currentTurn;
            this.currentTurn = this.currentTurn == "X" ? "O" : "X";
            
            this.endOfGame();

            return oldTurn;

        } else if(boardPosition == "X" || boardPosition == "O") {
            return "";
        } else {
            console.error("Move Error => board position error")
            return "";
        }
    }

    validatePosition(position) {

        return true;
    }

    endOfGame() {

        // calculate if someone won

        // no moves are possible

    }
}


