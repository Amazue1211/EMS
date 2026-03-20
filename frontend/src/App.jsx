import React from 'react'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Payment from './pages/Payment'
import Maintainance from './pages/maintenance'
import Properties from './pages/Properties'
import Register from './pages/Register'
import Tenant from './pages/tenant'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/maintenance" element={<Maintainance />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tenant" element={<Tenant />} />
      </Routes>
    </Router>
  )
}

export default App