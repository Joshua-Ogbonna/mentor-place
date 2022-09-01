import React from 'react'
import ReactLoading from "react-loading"

const Loader = () => {
  return (
    <div className="loader__component">
        <ReactLoading type="spin" width={30} height={30} color="#fff" />
    </div>
  )
}

export default Loader