import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Delivery from './components/service/delivery';


const delivery = new Delivery(process.env.REACT_APP_DELIVERY_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App delivery={delivery} />
  </React.StrictMode>,
  document.getElementById('root')
);

