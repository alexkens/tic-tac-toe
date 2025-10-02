const { useState } = React;

// components
function PlayerSymbol() {
    
    return (
        <div class="w-[50%] flex justify-around gap-3 border rounded-xs">
            <button id="playerX" class="bg-amber-400 px-1 rounded-xs w-full">X</button> or <button id="playerO" class="bg-green-400 px-1 rounded-xs w-full">O</button>
        </div>
    );
}

function Board() {

    const newGame = new Game();

    return (
        <div class="border border-white w-50 h-50 grid grid-cols-3 gap-1 p-1">
            <Cell id="0" moveFunc={newGame.move}/>
            <Cell id="1" moveFunc={newGame.move}/>
            <Cell id="2" moveFunc={newGame.move}/>
        </div>
    );
}

function Cell({ id, moveFunc}) {
    const [text, setText] = useState("");

    function handleClick() {
        setText(moveFunc(id));
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