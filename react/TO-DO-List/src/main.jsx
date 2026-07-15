
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Myprovider } from "./context/Mycontext.jsx";
createRoot(document.getElementById('root')).render(  
 <Myprovider><App/></Myprovider>
)
