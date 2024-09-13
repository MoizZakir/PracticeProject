import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import {
  BrowserRouter,
  Routes,
  
  Route,
  Link,
  
} from  "react-router-dom";
import Hours from './pages/Hours'
import Menu from './pages/Menu'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>} />

<Route path="/about" element={<About/>} />
<Route path="/hours" element={<Hours/>} />
<Route path="/menu" element={<Menu/>} />
    
      
      </Routes>
      </BrowserRouter>
  )
}

export default App
