import React from 'react'
import ReactDOM from 'react-dom/client'
//import { GetCatData } from './CatAPI.jsx'
import {CardBoard} from './CardBoard.jsx'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <CardBoard />
  </React.StrictMode>,
)
