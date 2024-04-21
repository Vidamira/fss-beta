import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Register from './pages/Register'
import Login from './pages/Login'
import Blog from './pages/Blog'

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agency />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
