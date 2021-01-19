import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Codenames from "./Codenames";

function App() {

  const [gameKey, setGameKey] = useState(0);

  function newGame() {
    setGameKey(key => key + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Codenames key={gameKey}/>
        <button onClick={newGame} style={{marginTop: 20}}>new game</button>
      </header>
    </div>
  );
}

export default App;
