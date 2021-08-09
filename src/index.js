import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'

const store= createStore(rootReducer);
console.log('store',store);
console.log('STATE',store.getState());

// console.log('BEFORE_STATE', store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// });

// console.log('AFTER_STATE', store.getState());

ReactDOM.render(
    <App store={store}/>,
  document.getElementById('root')
);

