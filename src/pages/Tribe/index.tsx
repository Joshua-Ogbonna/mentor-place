import React from 'react'
import MainTribe from '../../components/TribeComponents/MainTribe'
import Sidebar from '../../components/TribeComponents/Sidebar'

const Tribe = () => {
  return (
    <div className="dashboard__index">
      <Sidebar />
      <MainTribe />
    </div>
  )
}

export default Tribe