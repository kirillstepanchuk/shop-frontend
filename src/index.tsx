import React from 'react';
import ReactDOM from 'react-dom/client';
import createSagaMiddlware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { routerMiddleware } from 'connected-react-router';

import './index.css';
import App from './App';
import root from './store/reducers';
import sagaWatcher from './store/sagas/watcher';

const saga = createSagaMiddlware();
// const router = routerMiddleware(history);
const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(
    saga,
  )),
);
saga.run(sagaWatcher);

const rootEl = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
rootEl.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
