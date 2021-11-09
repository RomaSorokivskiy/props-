import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


//import App file
import App from './components/App/App'
//style bootstrap
import './bootstrapStyle/bootstrap.min.css'
//import style file Index
import './stylesheets/css/index.css'

ReactDOM.render(
  <React.StrictMode>
      <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
