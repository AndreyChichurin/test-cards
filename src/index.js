import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createStore, bindActionCreators } from 'redux';

import Card from './components/Card';
import Cart from './components/Cart';

import reducer from './reducer'
import * as actions from './actions'

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec } = bindActionCreators(actions, dispatch);

let cards = [
  {
    id: 1,
    subject: "Английский язык",
    description: "Преподавание английского языка: реализация ФГОС-2020 и новые тенденции в образовании",
    time: "72 часа"
  },
  {
    id: 2,
    subject: "Обществознание",
    description: "Преподавание обществознания с учетом перспективной модели ФГОС-2020",
    time: "72 часа"
  },
  {
    id: 3,
    subject: "Химия",
    description: "Преподавание химии с учетом перспективной модели ФГОС-2020",
    time: "72 часа"
  },
]

const update = () => {
  ReactDOM.render(
    <React.StrictMode>
      <div className="container">
        <div className="cards">
          {cards.map(elem => {
            return <Card
              key={elem.id}
              card={elem}
              inc={inc}
              dec={dec}
            />
          }
          )}
        </div>
        <Cart counter={store.getState()} inc={inc} />
      </div>
    </React.StrictMode>,
    document.getElementById('root'))
}
update();
store.subscribe(update);
