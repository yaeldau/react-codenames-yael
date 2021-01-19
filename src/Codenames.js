import React, {useState} from 'react';
import ScorePanel from "./ScorePanel";
import {blueInitCounter, redInitCounter} from "./configuration";
import Board from "./Board";
import {getRandomWords} from "./WordsUtil";

export default function Codenames(props) {

  const [redCounter, setRedCounter] = useState(redInitCounter);
  const [blueCounter, setBlueCounter] = useState(blueInitCounter);
  const [isBlackClicked, setIsBlackClicked] = useState(false);
  const [spymaster, setSpymaster] = useState(false);
  const gameWords = getRandomWords()

  function isGameEnded() {
    let res = false;
    if (redCounter === 0 || blueCounter === 0) {
      res = true
    }
    if (isBlackClicked) {
      res = true
    }

    if (res) {
      setSpymaster(true);
    }
    return res;
  }

  return (
      <div>
        <h1>Codenames</h1>
        <ScorePanel red={redCounter} blue={blueCounter}/>
        {redCounter === 0 && <h1 style={{color: 'red'}}> Red Team Won !</h1>}
        {blueCounter === 0 && <h1 style={{color: 'blue'}}> Blue Team Won !</h1>}
        <Board gameWords={gameWords} setRedCounter={setRedCounter}
               setBlueCounter={setBlueCounter} gameEnded={isGameEnded}
               setIsBlackClicked={setIsBlackClicked} spymaster={spymaster}/>
        <button style={{marginTop: 40}}
                onClick={() => setSpymaster(mode => !mode)}>spymaster
        </button>
      </div>)
}