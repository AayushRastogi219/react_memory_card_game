import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { clearGame } from '../../utils/gameState'
import setLevel from '../../utils/setLevel'
import HomeStyled from './HomeStyled';

class HomeConnected extends Component {
  state = {
    redirectToGame: false
  }

/**
 * This function gets called when user select a level in begining of a game.
 */
 handleLevelSelect = (level) => {
    clearGame()
    setLevel(level)
    this.setState({
      redirectToGame: true
    })
  }

  render() {
    return this.state.redirectToGame
      ? <Redirect to="/game" />
      : <HomeStyled onLevelSelect={this.handleLevelSelect} />
  }
}

export default HomeConnected
