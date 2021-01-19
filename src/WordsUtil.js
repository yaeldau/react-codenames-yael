import {
  bankOfWords,
  blueInitCounter,
  boardColumns,
  boardRows,
  colors,
  redInitCounter
} from "./configuration";

function getWordsForGame() {
  let words = [...bankOfWords];
  words = shuffleArray(words)
  words = words.slice(0, boardColumns * boardRows)
  while (words.length < boardColumns * boardRows) {
    let r = Math.floor(Math.random() * bankOfWords.length) + 1;
    words.push(bankOfWords[r]);
  }
  return words;
}

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function getColorsArray(gameWords) {
  let wordsColor = [];
  let index = 0;
  for (let i = index; i < redInitCounter; i++) {
    wordsColor.push(colors.RED)
  }
  index += redInitCounter
  for (let i = index; i < index + blueInitCounter; i++) {
    wordsColor.push(colors.BLUE)
  }
  index += blueInitCounter
  for (let i = index; i < index + 1; i++) {
    wordsColor.push(colors.BLACK)
  }
  index += 1
  for (let i = index; i < gameWords.length; i++) {
    wordsColor.push(colors.NEUTRAL)
  }
  return shuffleArray(wordsColor)
}

export function getRandomWords() {

  let gameWords = getWordsForGame()
  let wordsColor = getColorsArray(gameWords)

  let gameWordsWithColors = {}
  for (let i = 0; i < gameWords.length; i++) {
    let word = gameWords[i];
    gameWordsWithColors[word] = wordsColor[i];
  }

  return gameWordsWithColors;
}