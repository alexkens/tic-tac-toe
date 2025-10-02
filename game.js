// game logic


class Game {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = "X";
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

        console.log("yooooooo");
        const response = this.validatePosition(position);

        if(response) {
            turnN++;



            this.endOfGame();

        } else {
            
        }
    }

    validatePosition(position) {

        return true;
    }

    endOfGame() {

    }
}


