import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
        <Navigation />
        <Outlet />
        <Footer />
    </>
  )
}

export default AppLayout
