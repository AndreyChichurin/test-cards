import React from 'react';

const Cart = ({ counter }) => {
  return (
    <div className="cart">
      <div className="cart__image">
        <img src="./image/cart.svg" alt="cart" />
        <div><span>{counter}</span></div>
      </div>
      <a className="cart__link" href="#">Оставить<br />заявку</a>
    </div>
  )
}

export default Cart
