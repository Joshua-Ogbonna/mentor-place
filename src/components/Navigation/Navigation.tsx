import React from 'react'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav>
      <div className="brand">
        <Link to="/"><h5>Trybe</h5></Link>
      </div>
      <div className="links">
        <ul>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/pricing">Pricing</Link></li> */}
          <li><Link to="/login">Login</Link></li>
          <li className="started__button flex__one"><Link to="/onboarding">Get Started</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation