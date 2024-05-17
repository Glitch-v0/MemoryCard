import React from 'react'
import ReactDOM from 'react-dom/client'
import { GetCatData } from './CatAPI.jsx'
import '../index.css'

let firstCatLoad = GetCatData()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <p>{firstCatLoad}</p>
  </React.StrictMode>,
)
