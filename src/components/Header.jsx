import React from 'react'
import "../css/Header.css"
import vid from "../assets/background video.mp4"
import TopBar from './TopBar'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <section className="header-showcase">
        <TopBar color="rgb(122, 8, 145)" />
        <video className="header-background" src={vid} muted loop autoPlay></video>
        <div className="header-text">
          <h2>Mandawali Maniacs</h2>
          <h3>The best SMITE team ever</h3>
          <div>
          <NavLink to="/about">Learn More</NavLink>
          </div>
        </div>
        <div className="header-socials">
          <ul className="header-list">
            <li className="header-item">
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=QDia3e12czc" className="header-link">
                <i className="ph-twitter-logo"></i>
              </a>
            </li>
            <li className="header-item">
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=QDia3e12czc" className="header-link">
              <i className="ph-instagram-logo"></i>
              </a>
            </li>
            <li className="header-item">
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=QDia3e12czc" className="header-link">
                <i className="ph-facebook-logo"></i>
              </a>
            </li>
            <li className="header-item">
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=uO3fAkUUQ4w" className="header-link">
                <i className="ph-youtube-logo"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>        
    </div>
  )
}

export default Header
