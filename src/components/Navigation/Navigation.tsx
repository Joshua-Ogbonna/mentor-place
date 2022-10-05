import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav className="shadow">
      <div className="brand">
        <Link to="/home"><h5>Trybe</h5></Link>
      </div>
      <div className="links first__link">
        <ul>
          <li>Events</li>
          <li>Communities</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
      <div className="links second__link">
        <ul>
          <Link to="/"><li className="dashboard__link">Dashboard</li></Link>
          <Link to="/login"><li className="login__button">Login</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation