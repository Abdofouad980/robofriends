// import Hello from './Hello';
// import Card from './Card';
// import CardList from './CardList';
// import {robots} from './robots';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import {searchRobots,requestRobots} from './reducer';
import 'tachyons';
const Logger = createLogger();//using createLogger for logging action and for this must use applyMiddleware package
const rootReducer = combineReducers({searchRobots,requestRobots}) //combine reducers with prackets
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,Logger))
ReactDOM.render(
  <React.StrictMode>
   {/* <Hello greeting={'Hello '+'React Ninja'}/> */}
  <Provider store={store}> 
  <App/>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
