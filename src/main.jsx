import React from 'react'
import ReactDOM from 'react-dom/client'
//import { GetCatData } from './CatAPI.jsx'
import '../index.css'
import { GameBoard } from './GameBoard.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <GameBoard></GameBoard>
  </React.StrictMode>,
)
