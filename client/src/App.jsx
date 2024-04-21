import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Agency from './pages/Agency';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Container from './components/Container';

import axios from 'axios';
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  
  return (
    <>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agency' element={<Agency />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Container>
      
    </>
  )
}

export default App