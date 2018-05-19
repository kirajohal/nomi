import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './landing-page/landing-page';
import registerServiceWorker from './registerServiceWorker';

var ReactRethinkdb = require('react-rethinkdb');

ReactRethinkdb.DefaultSession.connect({
  host: '127.0.0.1', // hostname of the websocket server
  port: 8015, // port number of the websocket server
  path: '/db', // HTTP path to websocket route
  secure: false, // set true to use secure TLS websockets
  db: 'nomi', // default database, passed to rethinkdb.connect
  autoReconnectDelayMs: 2000 // when disconnected, millis to wait before reconnect
});

ReactDOM.render(<LandingPage />, document.getElementById('root'));
registerServiceWorker();
