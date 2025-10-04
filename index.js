const { useState } = React;

// components
function PlayerSymbol() {
    
    return (
        <div class="flex flex-col items-center gap-2">
            <h1>Pick your Player:</h1>
            <div class="w-full flex items-center gap-4">
                <div class="w-[50%] flex justify-around gap-3 border rounded-xs">
                    <button id="playerX" class="bg-amber-400 px-1 rounded-xs w-full">X</button> or <button id="playerO" class="bg-green-400 px-1 rounded-xs w-full">O</button>
                </div>
                <div class="text-xs whitespace-nowrap">(X always starts)</div>
            </div>
        </div>
    );
}

function Board() {

    const newGame = new Game();

    return (
        <div>
            <div class="border border-white w-50 h-50 grid grid-cols-3 gap-1 p-1">
                <Cell id={0} game={newGame} />
                <Cell id={1} game={newGame} />
                <Cell id={2} game={newGame} />
                <Cell id={3} game={newGame} />
                <Cell id={4} game={newGame} />
                <Cell id={5} game={newGame} />
                <Cell id={6} game={newGame} />
                <Cell id={7} game={newGame} />
                <Cell id={8} game={newGame} />
            </div>
            <EndStatement game={newGame} />
        </div>
    );
}

function EndStatement({game}) {
    let context = ". . .";
    
    if(game.winner && !game.gameFinished) {
        context = `${game.winnder} has won`;
    } else if(game.gameFinished && !game.winnder) {
        context = "No moves are possible";
    }

    return(
        <div class="bg-white text-amber-300">Message: {context}</div>
    );
}

function Cell({ id, game}) {
    const [text, setText] = useState("");

    function handleClick() {
        // check if game is over
        if(game.winner || game.gameFinished) return;
        
        // make move internally
        const [moveResponse, moveBool] = game.move(id);

        // make move in frontend
        if(moveBool) {
            setText(moveResponse);
        } else {
            if(game.winner) {
                setText(moveResponse);
                console.log(`${game.winner} has won!`);
            } else if (game.gameFinished && !game.winner) {
                setText(moveResponse);
                console.log("No possible Moves!");
            } else {
                console.log("Position is occupied.");
            }
        } 
    }

    return (
        <div id={id} onClick={handleClick} class=" border rounded-sm flex justify-center items-center text-xl">{ text }</div>
    );
}

function App() {


    return (
        <div class="text-white flex flex-col items-center gap-4">
            <PlayerSymbol />
            <Board />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("game")).render(<App />);