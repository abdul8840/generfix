import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footerr'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Appointments from './pages/Appointments'
import PrivateRoute from './components/PrivateRoutes/PrivateRoute'
import Dashboard from './pages/Dashboard'
import AboutUs from './pages/AboutUs'
import ServicesDetail from './pages/ServicesDetail'
import { onlineServices } from './assets/data/services'
import { repairServices } from './assets/data/repairServices'
import { itServices } from './assets/data/itServices'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import OnlineServices from './pages/OnlineServices'
import FAQ from './pages/FAQ'
import RepairServices from './pages/RepairServices'
import ItServices from './pages/ItServices'
import RepairServiceDetail from './pages/RepairServiceDetail'
import ItServiceDetail from './pages/ItServiceDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Header onlineServices={onlineServices} repairServices={repairServices} itServices={itServices}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/digital-marketing-services" element={<OnlineServices />} />
        <Route path="/it-solutions" element={<ItServices />} />
        <Route path="/repair-services" element={<RepairServices />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/services/:id" element={<ServicesDetail onlineServices={onlineServices} />} />
        <Route path="/repair-services/:id" element={<RepairServiceDetail repairServices={repairServices} />} />
        <Route path="/it-services/:id" element={<ItServiceDetail itServices={itServices} />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route element={<PrivateRoute />}>
          <Route path="/appointment" element={<Appointments onlineServices={onlineServices} repairServices={repairServices} itServices={itServices} />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
