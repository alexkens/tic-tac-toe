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

function Board({ game }) {

    const [gameEnd, setGameEnd] = useState(". . .");

    return (
        <div>
            <div class="border border-white w-50 h-50 grid grid-cols-3 gap-1 p-1 shadow-md">
                <Cell id={0} game={game} setGameEnd={setGameEnd} />
                <Cell id={1} game={game} setGameEnd={setGameEnd} />
                <Cell id={2} game={game} setGameEnd={setGameEnd} />
                <Cell id={3} game={game} setGameEnd={setGameEnd} />
                <Cell id={4} game={game} setGameEnd={setGameEnd} />
                <Cell id={5} game={game} setGameEnd={setGameEnd} />
                <Cell id={6} game={game} setGameEnd={setGameEnd} />
                <Cell id={7} game={game} setGameEnd={setGameEnd} />
                <Cell id={8} game={game} setGameEnd={setGameEnd} />
            </div>
            <div class="text-black flex justify-center mt-4">{gameEnd}</div>
        </div>
    );
}

function Cell({ id, game, setGameEnd}) {
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

                setGameEnd(`${game.winner} has won!`);

            } else if (game.gameFinished && !game.winner) {
                setText(moveResponse);
                console.log("No possible Moves!");

                setGameEnd("No possible Moves!");
            } else {
                console.log("Position is occupied.");

                setGameEnd("Position is occupied.");
            }
        } 
    }

    return (
        <div id={id} onClick={handleClick} class=" border rounded-sm flex justify-center items-center text-xl">{ text }</div>
    );
}

function App() {
    const [game, setGame] = useState(new Game());

    function handleReset() {
        setGame(new Game());
    }

    return (
        <div class="text-white flex flex-col items-center gap-4">
            <PlayerSymbol />
            <div class="flex justify-center items-center gap-6">
                <button onClick={handleReset} class="bg-slate-600 p-2 rounded-lg shadow-md hover:bg-slate-400 hover:text-slate-600 active:border-2" >Reset</button>
                <Board game={game} />
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("game")).render(<App />);