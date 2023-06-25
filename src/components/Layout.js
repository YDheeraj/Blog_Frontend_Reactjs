import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <Navbar></Navbar>
    <Footer></Footer>
    <Outlet></Outlet>
    
    </>
  )
}

export default Layout