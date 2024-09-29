import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const root = ReactDOM.createRoot(document.getElementById('root'));

//De default la página va a estar en inglés
var localeLanguage = "en"
var localeMessage = localeEnMessages

var userLang = navigator.language || navigator.userLanguage; 

if (userLang.includes("es-") || userLang==="es"){
  localeLanguage = "es";
  localeMessage = localeEsMessages;
}

root.render(
  <IntlProvider locale={localeLanguage} messages= {localeMessage}>
    <App />
  </IntlProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
