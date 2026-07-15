import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Myshopcust } from './components/contextapi/Mywebsite.jsx'
createRoot(document.getElementById('root')).render(<Myshopcust>
   <App/>
</Myshopcust>)
