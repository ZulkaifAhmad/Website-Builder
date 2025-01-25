import React from 'react'
import { Outlet } from 'react-router-dom'
import PortfolioThreeHeader from './PortfolioThreeHeader'

function PortfolioThreeLayout() {
  return (
    <div>
        <PortfolioThreeHeader />
        <Outlet />
    </div>
  )
}

export default PortfolioThreeLayout