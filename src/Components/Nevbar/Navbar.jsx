import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Ravi Shankar
            </div>
                <span>toggle</span>
                </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:"none"}}>
                        <li>Home</li>
                        <li>resume</li>
                        <li>Experience</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button className="button">Contact Me 
                </button>
            </div>
       
    </div>
  )
}

export default Navbar