import React from 'react'
import "../css/Menu.css"
import {NavLink} from "react-router-dom"
import { motion } from 'framer-motion'
const Navbar = (props) => {
  const onClick = () => {   
    document.querySelector(".navbar-links").classList.add("navbar-links-active")
  }
  const onClose = () => {
    document.querySelector(".navbar-links").classList.remove("navbar-links-active")
  }
  return (
    <motion.div className="navbar">
    <div className="navbar-toggle">
    <i onClick={onClick} className="ph-list-bold"></i>
    </div>  
    <div style={{background : props.bg}} className="navbar-links">
      <button onClick={onClose} className="navbar-close">
      <i className="ph-x-bold"></i>
      </button>
    <ul className="navbar-list">
      <li className="navbar-item">
          <NavLink to="/">
              <motion.span
              whileHover={{
                transition: 20,
                background: "white",
                color: props.bg,
                padding: '1rem'
              }} 
              
              className="navbar-link">Go Back Home</motion.span>
          </NavLink>
      </li>         
      <li className="navbar-item">
          <NavLink to="/about">
              <motion.span 
              whileHover={{
                transition: 20,
                background: "white",
                color: props.bg,
                padding: '1rem'
              }} 
              
              className="navbar-link">Meet Our Team</motion.span>
          </NavLink>
      </li>
      <li className="navbar-item">
          <NavLink to="/merchandise">
              <motion.span 
              whileHover={{
                transition: 20,
                background: "white",
                color: props.bg,
                padding: '1rem'
              }} 
              className="navbar-link">Buy Our Merch</motion.span>
          </NavLink>
      </li>
      <li className="navbar-item">
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=uO3fAkUUQ4w">
              <motion.span 
              whileHover={{
                transition: 20,
                background: "white",
                color: props.bg,
                padding: '1rem'
              }} 
              className="navbar-link">Watch Our Video</motion.span>
          </a>
      </li>
    </ul>
  </div>
    </motion.div>

  )
}

export default Navbar
