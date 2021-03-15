import React from 'react';
import { chunk } from 'lodash'

import {
  Card,
  Header
} from '../../components'

const Cards = ({ cards, className, onClick, displayTimer, errorCount }) => {
  const chunkedCards = chunk(cards, 6)
  return (
    <div className={className}>
      <Header displayTimer={displayTimer} errorCount={errorCount}/>

      <div className="Cards__content">
        {chunkedCards.map((cards, index) =>
          <ul key={index}>
            {cards.map((card, index) =>
              <Card
                className="Card"
                id={card.id}
                key={`${card.name}--${index}`}
                name={card.name}
                onClick={() => !card.show && onClick(card.id, card.name)}
                show={card.show}
                isCardMatch={card.isCardMatch}
              />
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Cards;
