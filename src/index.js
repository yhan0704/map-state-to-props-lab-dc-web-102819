import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {Provider} from 'react-redux'
import manageUsers from './reducers/manageUsers'


ReactDOM.render(
  <Provider store={manageUsers} >
  <App />
  </Provider>
  ,
  document.getElementById('root')
);
