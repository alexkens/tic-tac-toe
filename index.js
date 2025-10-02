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
        <div class="border border-white w-50 h-50 grid grid-cols-3">
            <div id="1" onClick={newGame.move} class="border"></div>
            <div id="2" class="border"></div>
            <div id="3" class="border"></div>
            <div id="4" class="border"></div>
            <div id="5" class="border"></div>
            <div id="6" class="border"></div>
            <div id="7" class="border"></div>
            <div id="8" class="border"></div>
            <div id="9" class="border"></div>
        </div>
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