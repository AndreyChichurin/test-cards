import React, { useState } from 'react';

const Card = ({card, inc, dec}) => {
  const { subject, description, time } = card
  
  let cardClassName_add = "cards__card"
  let cardClassName_done = "cards__card-done"
  let button_add = (<button className="card__button-add" onClick={() => {
    setButton(button_done)
    setCardClassName(cardClassName_done)
    inc()
  }}>Добавить</button>)
  let button_done = (<button className="card__button-done" onClick={() => {
    setButton(button_add)
    setCardClassName(cardClassName_add)
    dec()
  }}>Удалить из заявки</button>)

  const [button, setButton] = useState(button_add)
  const [cardClassName, setCardClassName] = useState(cardClassName_add)

  return (
     <div className={cardClassName}>
      <div>
        <div className="card__image">
          <img src="/image/done_fill.svg" alt="done_fill" />
        </div>
        <div className="card__subject">{subject}</div>
        <div className="card__description">{description}</div>
      </div>
      <div>
        <div className="card__textbook">
          <img src="/image/textbook.svg" alt="textbook" />
          <div className="textbook__text">Удостоверение</div>
        </div>
        <div className="card__time">
          <img src="/image/clock.svg" alt="clock" />
          <div className="time__text">{time}</div>
        </div>
      </div>
      {button}
    </div >
  );
}

export default Card;
