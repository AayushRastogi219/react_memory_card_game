import styled from 'styled-components'

import Home from './Home.js'

const HomeStyled = styled(Home)`
  .NewGame__title {
    text-align: center;
    font-weight: 300;
    font-size: 30px;
    color: #000000;
  }

  .NewGame__link {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    color: 	#000000;
    cursor: pointer;
    transition: opacity .3s ease-in-out;
    
    &:hover {
      opacity: .5;
    }
  }

  .NewGame__container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    flex-wrap: wrap;
  }

  li a {
    text-decoration: none;
    color: white !important;
    display: block;
  }

  li {
    float: left;
    list-style: none;
    text-align: center;
    background-color: #628cd4;
    margin-right: 30px;
    width: 150px;
    line-height: 60px;
    border-radius: 50px;
  }
`

export default HomeStyled
