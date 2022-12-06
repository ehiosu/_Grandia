import React from 'react'
import ReactDOM from 'react-dom/client'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import { Home } from './PageImports'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
