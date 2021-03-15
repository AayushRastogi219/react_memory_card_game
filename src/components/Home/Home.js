import React from 'react'


const LevelLink = ({ children, onClick, type }) => {
  return (
    <a onClick={onClick} className="NewGame__link">

      {children}
    </a>
  )
}

const Home = ({
  className,
  onLevelSelect
}) => (
  <div className={className}>
    <header >
       <h1>Memory Game</h1>
      </header>
    <h1 className="NewGame__title">
      Please select game difficulty:
    </h1>

    <ul>
      <li>
        <LevelLink
          type="easy"
          onClick={() => onLevelSelect('easy')}
        >
          Easy
        </LevelLink>
      </li>

      <li>
        <LevelLink
          type="medium"
          onClick={() => onLevelSelect('medium')}
        >
          Medium
        </LevelLink>
      </li>

      <li>
        <LevelLink
          type="hard"
          onClick={() => onLevelSelect('hard')}
        >
          Hard
        </LevelLink>
      </li>

    </ul>
  </div>
)

export default Home