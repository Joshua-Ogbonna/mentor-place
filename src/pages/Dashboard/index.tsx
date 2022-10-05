import React from 'react'

import "./Dashboard.css"
import MainDashboard from '../../components/DashboardComponents/MainDashboard'
import Sidebar from '../../components/DashboardComponents/Sidebar'
import MetaTagComponent from '../../components/Reusables/MetaTags'

const Dashboard = () => {
  return (
    <div>
      <MetaTagComponent title="Home - Tribe Dashboard" />
      <div className="dashboard__index">
        <Sidebar />
        <MainDashboard />
    </div>
    </div>
  )
}

export default Dashboard