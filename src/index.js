import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Context from './context/Context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('root')
);

serviceWorker.unregister();
