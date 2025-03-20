import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing'
import Authentication from './pages/authentication'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/auth' element={<Authentication/>}/>
        </Routes>
       </Router>
    </>
  )
}

export default App
