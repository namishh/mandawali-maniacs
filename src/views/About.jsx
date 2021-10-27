import React, { useState } from 'react'
import TopBar from '../components/TopBar'
import '../css/About.css'
import qvofred from "../assets/qvofred.png"
import polarbear from "../assets/polasbearmike.png"
import paul from "../assets/paul.png"
import deathwalker from "../assets/deadthwalker.png"
import jake from "../assets/awesomejake.png"
import PlayerCard from '../components/PlayerCard'
import biggy from "../assets/biggy.png"
import {PacmanLoader} from "react-spinners"
const About = () => {
  const [load , setLoad] = useState(true)
  setTimeout(() => {
    setLoad(false)
  }, 2500)
  const css = `
  position : absolute;
  top : 45%;
  left : 45%;
  transform : translate(-50%, -50%)
`
  
  return (
    <>
    {load ? <PacmanLoader css={css} size={48} color="blue"/> : <div><div className="about-showcase">
        <TopBar color="blue" />
        <div className="about-players">
        <PlayerCard img={qvofred} name="QVOFRED" role="hunter" kills={226} assists={312} gold='18,272' damage="15,972" 
        main="Serqet" />
        <PlayerCard img={jake} name="AWESOMEJAKE" role="guardian" kills={82} assists={404} gold='14,822' damage="10257" 
        main="Fafnir" />
        <PlayerCard img={polarbear} name="PolarBearMike" role="assassin" kills={87} assists={500} gold='16,822' damage="10235" 
        main="Athena" />
        <PlayerCard img={paul} name="Paul" role="mage" kills={205} assists={311} gold='17,939' damage="21,423" 
        main="Raijin" />
        <PlayerCard img={deathwalker} name="DeathWalker" role="warrior" kills={405} assists={231} gold='14,219' damage="26,623" 
        main="Odin" />
        <div className="player-card">
        <figure className="player-card-front-a">
        <img alt="coach" src={biggy}/>
        <div className="player-card-name">
          <h1>Biggy | Coach</h1>
        </div>
        </figure>
        </div>

        </div>
      </div>
    </div>}
    </>
      
  )
}

export default About
