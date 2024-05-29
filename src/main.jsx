import React from 'react';
import ReactDOM from 'react-dom/client';
import GameBoard from './GameBoard';
import GreetingMessage from './GreetingMessage';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GreetingMessage />
    <GameBoard />
  </React.StrictMode>,
);
