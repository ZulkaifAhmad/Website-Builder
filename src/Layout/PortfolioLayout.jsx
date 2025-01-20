import React from 'react'
import Pheader from './Pheader'
import { Outlet } from 'react-router-dom'

function PortfolioLayout() {
  return (
    <>
        <Pheader />
        <Outlet />
    </>
  )
}

export default PortfolioLayout