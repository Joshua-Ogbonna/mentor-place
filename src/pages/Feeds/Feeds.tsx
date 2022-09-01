import React from 'react'
import FeedSidebar from '../../components/Feeds/FeedSidebar'
import FeedsMain from '../../components/Feeds/FeedsMain'
import FeedsNav from '../../components/Feeds/FeedsNav'
import FeedsUtils from '../../components/Feeds/FeedsUtils'

import MetaTagComponent from '../../components/Reusables/MetaTags'
import "./Feeds.css"

const Feeds = () => {
    
  return (
    <div className="feeds__component">
        <MetaTagComponent title="Trybe - Home" />
        {/* Layout of Home
          - Home should have a sidebar
          - Home should feeds
        */}
        <FeedsNav />
        <div className="home__layout">
          <FeedSidebar />
          <FeedsMain />
          <FeedsUtils />
        </div>
        <i className='bx bx-plus create__post'></i>
    </div>
  )
}

export default Feeds