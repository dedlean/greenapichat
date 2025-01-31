import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style={{
    backgroundColor:"#333",
    height:"100vh",
    color: "white",
    fontFamily:'sans-serif'
  }}><App/></div>
);