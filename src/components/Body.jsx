import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { SubscriptionList } from './subscriptions/SubscriptionList'

const Body = () => {
  return (
    <div className='grid grid-flow-col '>
      <Sidebar/>
      
      <Outlet/>
    </div>
  )
}

export default Body
 