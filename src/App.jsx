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
  useParams,
  
} from  "react-router-dom";
import Hours from './pages/Hours'
import Menu from './pages/Menu'
import Contact from './pages/Contact'


function App() {
  const [count, setCount] = useState(0)
  const name=useParams();
  console.log(name)

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home/>} />

<Route path="/about" element={<About/>} />
<Route path="/hours" element={<Hours/>} />
<Route path="/menu" element={<Menu/>} />
<Route path="/contact" element={<Contact/>} />
    
      
      </Routes>
      </BrowserRouter>
  )
}

export default App
