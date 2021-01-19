import React from 'react';
import Cell from "./Cell";
import {boardColumns, boardRows, colors} from "./configuration";

export default function Board(props) {
  const {gameWords, setRedCounter, setBlueCounter, gameEnded, setIsBlackClicked, spymaster} = props;

  function getCounter(i) {
    if (Object.values(gameWords)[i] === colors.RED) {
      return setRedCounter;
    }
    if (Object.values(gameWords)[i] === colors.BLUE) {
      return setBlueCounter;
    }
    return null
  }

  let isGameEnded = gameEnded()
  let i = 0;
  return (
      <div>
        {[...Array(boardRows)].map((r, index) => {
              i = index * 5
              return <div key={r}>
                {[...Array(boardColumns)].map(c => {
                  i++;
                  return <Cell key={i} color={Object.values(gameWords)[i-1]}
                               word={Object.keys(gameWords)[i-1]}
                               setCounter={getCounter(i - 1)} disabled={isGameEnded}
                               setIsBlackClicked={setIsBlackClicked}
                               spymaster={spymaster}/>
                })}
              </div>
            }
        )}
      </div>
  )
}