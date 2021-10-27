import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import {PacmanLoader} from "react-spinners"
const Home = () => {
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
    <div>
      {load ? <PacmanLoader css={css} size={48} color="purple"/> : <Header/>}
    </div>
  )
}

export default Home
