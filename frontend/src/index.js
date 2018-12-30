import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import rootReducer from './reducers/index';
import Register from './components/register';
import Token from './components/login';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/Login/' component={Token} />
          <Route exact path='/' component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('index'));
