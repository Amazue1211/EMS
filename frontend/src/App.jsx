import React from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Payment from './pages/Payments'
import Maintainance from './pages/Maitainance'
import Properties from './pages/Properties'
import Register from './pages/Register'
import About from './pages/About'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/maintenance" element={<Maintainance />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  
  )
  }
  export default App