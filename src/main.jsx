import React from 'react';
import ReactDOM from 'react-dom/client';
// import { GetCatData } from './CatAPI.jsx'
import GameBoard from './GameBoard';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GameBoard />
  </React.StrictMode>,
);
