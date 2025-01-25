import React from 'react'
import { Outlet } from 'react-router-dom'
import TempTwoHeader from './TempTwoHeader'

function PortfolioTwoLayout() {
  return (
    <div>
        <TempTwoHeader />
        <Outlet />
    </div>
  )
}

export default PortfolioTwoLayout