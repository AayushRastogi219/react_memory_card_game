import React from 'react'
import {
  loadSettings,
} from '../../utils/gameState'

const EndGame = ({ className }) => {
  return (
    <div className={className}>
        <p className="youWonText">
            Congratulations!<br />You won!
        </p>
        <br />

        <p>Score Card:</p>
            Time: {loadSettings('displayTimer')}
            <br />
            Error: {loadSettings('errorCount')}
        <br />
        <a href="/" className="newGameLink">
            Play again
        </a>
    </div>
  )
}

export default EndGame
