import React from 'react'
import { useHistory } from "react-router-dom";
import Navbar from './Navbar'
const TopBar = (props) => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }
  return (
    <header className="header-navbar">
      <h2 onClick={redirect} className="header-logo">MM</h2>
      <Navbar bg={props.color}/>
    </header>
  )
}

export default TopBar
