import React, {useState} from 'react';
import {colors} from "./configuration";

export default function Cell(props) {

  const {color, word, setCounter, disabled, setIsBlackClicked, spymaster} = props;
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
    if (!clicked && setCounter) {
      setCounter(count => count - 1);
    }
    if (color === colors.BLACK) {
      setIsBlackClicked(true);
    }
  }

  const style = {
    height: 100,
    width: 100,
    margin: 5,
    background: clicked || spymaster ? color : '',
  }

  return <button style={style} onClick={handleClick}
                 disabled={clicked ? true : disabled}>{word}</button>
}