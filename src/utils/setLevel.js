import {
    dropRight,
    shuffle
  } from 'lodash'
  
  import cards from '../config/cards.js'
  import { saveSettings } from '../utils/gameState.js'
  
/**
 * This function provide the board size as per the level selected by the user.
 * @return {number} c - A number value
 */
  const getBoardSize = (level) => {
    switch (level) {
      case 'easy':
        return 3
      case 'medium':
        return 6
      case 'hard':
        return 12
  
      default:
        return 15
    }
  }

/**
 * This function provide the number of cards as per selected level and shuffle them.
 * @param {string} level - A string param. Its a game level.
 * @return {array} c - An array of cards which appears on game board.
 */
  const getLevelCards = (level) => {
    const shuffledCards = shuffle(cards)
    const boardSize = getBoardSize(level)
    const elementsToDropAmount = shuffledCards.length - boardSize
    return dropRight(shuffledCards, elementsToDropAmount)
  }

/**
 * This function is use to save the selected level which is used later for loading all the cards.
 * @return {string} c - A string value
 */
  const setLevel = (level) => {
    saveSettings({
      level
    })
  }
  
  export {
    getLevelCards
  }
  
  export default setLevel
  