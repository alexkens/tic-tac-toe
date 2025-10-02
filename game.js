const { useState } = React;

// game logic


// components
function PlayerSymbol() {
    
    return (
        <div class="w-[50%] text-center border rounded-2xl">X or O</div>
    );
}

function Board() {

    return (
        <div class="border border-white w-50 h-50 grid grid-cols-3">
            <div id="1" class="border"></div>
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