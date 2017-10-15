import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import counterApp from './reducers';

const store = createStore(counterApp);

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
