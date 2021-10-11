import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import App from './App';
import './index.scss';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './state-management/reducers/';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <BrowserRouter>
    <div className={'app__container'}>
      <Provider store={store}>
        <App/>
      </Provider>
    </div>
  </BrowserRouter>, document.getElementById('root'));

