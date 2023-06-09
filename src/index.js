import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App/App';
// import './index.css';

const theme = {
  colors: {
    whiteColor: '#fff',
    bodyColor: '#ddf3e2',
    boxColor: '#acafbb',
  },
  spacing: value => `${4 * value}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
