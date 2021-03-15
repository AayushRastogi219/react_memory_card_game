import styled from 'styled-components'

import EndGame from './EndGame'

const EndGameStyled = styled(EndGame)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 30px;
  line-height: 1.5;
  
  .youWonText {
    display: block;
    text-align: center;
    color: #000000;
  }
  
  .newGameLink {
    color: white;
    text-decoration: none;
    background-color: #628cd4;
    width: 200px;
    line-height: 60px;
    border-radius: 50px;
    
    &:hover {
      opacity: .7
    }
  }
`

export default EndGameStyled
