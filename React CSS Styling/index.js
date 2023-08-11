import React from 'react';
import ReactDOM from 'react-dom/client';
import App  from './App';
import './index.css';
import { ThemeProvider } from 'styled-components';


const baseTheme = {
  background: '#fff',
  color: 'black'
}

const darkTheme = {
  background: 'black',
  color: '#fff'
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
   
  </React.StrictMode>
);


