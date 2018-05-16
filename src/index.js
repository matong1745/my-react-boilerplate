import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './App';
import { reducers } from './redux/reducers';

const history = createHistory();
const historyRouterMiddleware = routerMiddleware(history);

const store = createStore(
  reducers,
  {},
  composeWithDevTools(
    applyMiddleware(thunk, historyRouterMiddleware, createLogger)
  )
);

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <Component />
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};
render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
