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
    const [gameEnd, setGameEnd] = useState(". . .");

    const [game, setGame] = useState(new Game());
    function handleReset() {
        setGame(new Game());
        for(let i=0; i < 9; i++) {
            setTextList[i]("");
        }
        setGameEnd(". . .");
    }

    const [text0, setText0] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");
    const [text4, setText4] = useState("");
    const [text5, setText5] = useState("");
    const [text6, setText6] = useState("");
    const [text7, setText7] = useState("");
    const [text8, setText8] = useState("");
    const texts = [
        text0, text1, text2, text3, text4, text5, text6, text7, text8,
    ];
    const setTextList = [
        setText0, setText1, setText2, setText3,setText4, setText5, setText6, setText7, setText8,
    ];

    function handleClick(id, setTextList) {
        // check if game is over
        if(game.winner || game.gameFinished) return;

        // make move internally
        const [moveResponse, moveBool] = game.move(id);
        console.log(moveResponse, moveBool);

        // make move in frontend
        if(moveBool) {
            setTextList[id](moveResponse);
            setGameEnd(". . .");
        } else {
            if(game.winner) {
                setTextList[id](moveResponse);
                console.log(`${game.winner} has won!`);

                setGameEnd(`${game.winner} has won!`);

            } else if (game.gameFinished && !game.winner) {
                setTextList[id](moveResponse);
                console.log("No possible Moves!");

                setGameEnd("No possible Moves!");
            } else {
                console.log("Position is occupied.");

                setGameEnd("Position is occupied.");
            }
        } 
    }

    return (
        <div>
            <div class="flex justify-center items-center gap-6">
                <button onClick={handleReset} class="bg-slate-600 p-2 rounded-lg shadow-md hover:bg-slate-400 hover:text-slate-600 active:border-1 active:border-white active:box-border" >Reset</button>
                <div class="border border-white w-48 h-48 grid grid-cols-3 gap-1 p-1 shadow-md">
                    <Cell id={0} text={text0} onClick={() => handleClick(0, setTextList)} />
                    <Cell id={1} text={text1} onClick={() => handleClick(1, setTextList)} />
                    <Cell id={2} text={text2} onClick={() => handleClick(2, setTextList)} />
                    <Cell id={3} text={text3} onClick={() => handleClick(3, setTextList)} />
                    <Cell id={4} text={text4} onClick={() => handleClick(4, setTextList)} />
                    <Cell id={5} text={text5} onClick={() => handleClick(5, setTextList)} />
                    <Cell id={6} text={text6} onClick={() => handleClick(6, setTextList)} />
                    <Cell id={7} text={text7} onClick={() => handleClick(7, setTextList)} />
                    <Cell id={8} text={text8} onClick={() => handleClick(8, setTextList)} />
                </div>
                <div class="w-20 text-black flex justify-center mt-4">{gameEnd}</div>
            </div>
            <div class="text-center">
                <div>Move History:</div>
                <ol>{}</ol>
            </div>
        </div>
    );
}

function Cell({ id, text, onClick }) {
    return (
        <div id={id} onClick={onClick} class="w-14 h-14 border rounded-sm flex justify-center items-center text-xl">{ text }</div>
    );
}

function App() {
    return (
        <div class="text-white flex flex-col items-center gap-4">
            <PlayerSymbol />
            <div>
                <Board />
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("game")).render(<App />);