import React from 'react'

const Card = ({ className, id, name, onClick, isCardMatch }) => {
  let image = require(`./images/${name}.svg`).default
  
  return image ? (
    <li className={className}>
      <a style = {{ visibility: isCardMatch ? 'hidden' : 'visible'}} className="Card__element" onClick={() => onClick(id, name)}>
        <div className="Card__contents Card__contents--back">
          ?
        </div>
        <div className="Card__contents Card__contents--front">
          <img src={image} alt={name} />
        </div>
      </a>
    </li>
  ) : null
}

export default Card
