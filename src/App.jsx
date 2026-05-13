import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Cart from './components/pages/Cart'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Shop from './components/pages/Shop'
import Login from './components/auth/Login'
import Usestate from './components/pages/Usestate'

function App() {
 
let siteName = "Ecommerce Mini Store"

  return (

    <>

<BrowserRouter>

     <Header title = {siteName} />

<Routes>

     <Route path="/" element={<Home />} />
      
      <Route path="/shop" element={<Shop />} />

     <Route path="/cart" element={<Cart />} />

<Route path="/login" element={<Login />} />

<Route path='/usestate' element={<Usestate />} ></Route>

</Routes>

     <Footer  title = {siteName} />

     </BrowserRouter>

    </>
  )
}

export default App
