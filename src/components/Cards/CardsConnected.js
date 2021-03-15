import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  drop,
  random,
  shuffle
} from 'lodash'
import { getLevelCards } from '../../utils/setLevel'
import { loadSettings, saveSettings } from '../../utils/gameState'
import CardsStyled from './CardsStyled.js'

const DELAY = 3000

class CardsConnected extends Component {
  constructor(props) {
    super(props)

    const cards = this.constructor.getCardStates()
    this.state = {
      cards,
      cardAttempts: [],
      cardAttemptsCount: 0,
      gameFinished: false,
      startTimer: false,
      elapsedTimer: '0 hours 0 mins 0 secs',
      errorCount: 0
    }
  }

/**
 * This function loads the cards as per the level selected by the user.
 * @return {object} c - An object value
 */
  static getCardStates() {
    const selectedLevel = loadSettings('level')
    const cards = getLevelCards(selectedLevel)
    const cardStates = []
    const duplicatedCards = shuffle([...cards, ...cards])

    for (let i=0; i<duplicatedCards.length; i++) {
      cardStates.push({
        id: `${duplicatedCards[i]}-${random(0,999)}`,
        name: duplicatedCards[i],
        show: false,
        isCardMatch: false
      })
    }
    return cardStates
  }

/**
 * This function find the index of selected card and return it.
 * @param {string} id - A number param. Its a card index.
 * @return {number} c - A number value
 */
  getCardIndex(id) {
    return this.state.cards.findIndex(card => {
      return card.id === id
    })
  }

/**
 * This function increase the card attempt when each time user select the card.
 */
  addCardAttempt(id, name) {
    const cardAttempts = this.state.cardAttempts
    cardAttempts.push({
      id,
      name
    })
    this.setState({
      cardAttempts,
      cardAttemptsCount: ++this.state.cardAttemptsCount
    })
  }

/**
 * This function compare the two cards. Return true if cards matches.
 * @return {boolean} c - A bool value True/False
 */
  compareCardAttempts() {
    const attempts = this.state.cardAttempts
    return attempts[0].name === attempts[1].name
  }

/**
 * This function clear the previous cards attempts made by the user.
 */
  clearPreviousCardAttempts() {
    const attempts = [...this.state.cardAttempts]
    this.setState({
      cardAttempts: drop(attempts, 2),
      cardAttemptsCount: 0
    })
  }

/**
 * This function checks whether two cards are same or not. If not then, hide the card content and perform error increment.
 * If both cards are same then, make the visibilty of matched cards to hidden.
 * Clear the previous cards attempt.
 */
  verifyCardAttempts() {
    if (!this.compareCardAttempts()) {
      this.hideCard(this.state.cardAttempts[0].id)
      this.hideCard(this.state.cardAttempts[1].id)
      this.setState({
        errorCount: ++this.state.errorCount
      })

    }else{
      this.hideMatchedCard(this.state.cardAttempts[0].id)
      this.hideMatchedCard(this.state.cardAttempts[1].id)
    }
    this.clearPreviousCardAttempts()
  }

/**
 * This function checks whether all the cards are revealed or not.
 * @return {boolean} c - A bool value True/False
 */
  checkIfAllCardsAreRevealed() {
    const hiddenCards = this.state.cards.some(card => {
      return !card.show
    })
    return !hiddenCards
  }

/**
 * This function shows the card content.
 * @param {string} id - A number param. Its a card index.
 */
  showCard(id) {
    const cardIndex = this.getCardIndex(id)
    const cards = [...this.state.cards]
    cards[cardIndex].show = true
    this.setState({
      cards
    })
  }

/**
 * This function gets called when two cards are not matched. It reset the card visibilty to default state.
 * @param {string} id - A number param. Its a card index.
 */
  hideCard(id) {
    const cardIndex = this.getCardIndex(id)
    const cards = [...this.state.cards]
    cards[cardIndex].show = false
    this.setState({
      cards
    })
  }

/**
 * This function gets called when two cards are matched. It make the visibilty of matched cards to hidden.
 * @param {string} id - A number param. Its a card index.
 */
  hideMatchedCard(id) {
    const cardIndex = this.getCardIndex(id)
    const cards = [...this.state.cards]
    cards[cardIndex].isCardMatch = true
    this.setState({
      cards
    })
  }

/**
 * This function gets called when all the cards are revealed.
 */
  endGame() {
    setTimeout(
      () => {
        this.setState({
          gameFinished: true
        })
      }, 500
    )
  }

/**
 * This is a function to start the timer when user picks a first card.
 */
 startGameTimerClock = () => {
  let second = 0
  let minute = 0
  let hour = 0
  setInterval( () => {
    this.setState({elapsedTimer: hour+"hours "+minute+"mins "+second+"secs"})
    second++;
    if(second === 60){
        minute++;
        second = 0;
    }
    if(minute === 60){
        hour++;
        minute = 0;
    }
  },1000);
  }

/**
 * This function gets called when user click on card.
 */
  handleCardClick = (cardId, cardName) => {
    if(!this.state.startTimer){
      this.setState({startTimer: true})
      this.startGameTimerClock()
    }
    if (this.state.cardAttemptsCount > 1)
      return
    
    this.showCard(cardId)
    this.addCardAttempt(cardId, cardName)

    setTimeout(() => {
    if (this.state.cardAttemptsCount === 2) {
        this.verifyCardAttempts()
      }
    }, DELAY);

    if (this.checkIfAllCardsAreRevealed()) {
      saveSettings({ displayTimer: this.state.elapsedTimer, errorCount:this.state.errorCount })
      this.endGame()
    }
  }

  render() {
    return this.state.gameFinished
      ? <Redirect to="/end-game" />
      : <CardsStyled
          cards={this.state.cards}
          onClick={this.handleCardClick}
          displayTimer={this.state.elapsedTimer}
          errorCount={this.state.errorCount}
        />
  }
}

export default CardsConnected
