import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// styles
import './index.css';

// hooks
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
