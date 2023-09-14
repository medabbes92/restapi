import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
// import logger from 'redux-logger'; // Importer redux-logger

const devtools = 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, 
  compose(applyMiddleware(thunk),devtools)); // Ajouter logger comme middleware

export default store