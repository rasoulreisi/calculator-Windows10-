// import { createStore } from "redux";
import {reducer} from './reducer'

//  const store = createStore(reducer)
//  export  {store}



import {createStore, applyMiddleware, compose} from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware()))