import React from 'react';
import reactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './components/main/App';
import reportWebVitals from './reportWebVitals';
import "@fontsource/nothing-you-could-do";
import "@fontsource/heebo";

const root = reactDOM.createRoot(document.getElementById("root"));
root.render( 
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
