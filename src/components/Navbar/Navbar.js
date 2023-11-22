import React, { useState, useEffect } from "react"
import { BrowserRouter, Link, NavLink,Routes,Route } from "react-router-dom";
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Contact from '../pages/Contact';
import section1_image from '../../images/cabin.png'
import section2_image from '../../images/cake.png'
import section3_image from '../../images/circus.png'
import section4_image from '../../images/game (1).png'
import section5_image from '../../images/game.png'
import section6_image from '../../images/submarine.png'
import './Navbar.css'

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 2000) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
    return (
        <>
        
     <nav>
       <div className="container">
            <div className={navbar ? " navbar active" : "navbar"}>
         <div className="logo">
            <h2>START REACT</h2>
         </div>
         <ul className="list-item">
            <li className="nav-item"><Link className="nav-link1" 
              to="/" >Portfolio </Link></li>
            <li className="nav-item"><Link className="nav-link2"
              to="#about">About </Link></li>
            <li className="nav-item"><Link className="nav-link3" 
              to="/contact">Contact </Link></li>
         </ul>
          </div>
          </div>
     </nav>
        
        </>
    )
}

export default Navbar

   