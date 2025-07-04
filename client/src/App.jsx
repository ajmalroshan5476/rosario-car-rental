import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import CarDetails from './Pages/CarDetails'
import Cars from './Pages/Cars'
import MyBookings from './Pages/MyBookings'
import Layout from './Pages/owner/Layout'
import Managecars from './Pages/owner/Managecars'
import AddCar from './Pages/owner/AddCar'
import Dashboard from './Pages/owner/Dashboard'
import ManagerBookings from './Pages/owner/ManagerBookings'
import Login from './Components/Login'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin}/>}
      
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBookings />} />

        {/* Owner routes */}
        <Route path='/owner' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='add-car' element={<AddCar />} />
          <Route path='manage-cars' element={<Managecars />} />
          <Route path='manage-bookings' element={<ManagerBookings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App



