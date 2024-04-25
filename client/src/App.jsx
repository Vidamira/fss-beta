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
import Footer from './components/Footer';

import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext';
import Dashboard from './pages/Dashboard';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  
  return (
    <UserContextProvider>
      
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
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Container>
      <Footer />
      
    </UserContextProvider>
  )
}

export default App
