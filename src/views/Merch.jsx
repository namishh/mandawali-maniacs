import React, {useState} from 'react'
import TopBar from '../components/TopBar'
import '../css/Merch.css'
import MerchCard from '../components/MerchCard'
import { merchData } from '../data'
import { PacmanLoader } from 'react-spinners'
const Merch = () => {
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
    {load ? <PacmanLoader css={css} size={48} color="purple"/> : <div className="">
        <div className="merch">
          <TopBar color="rgb(122, 8, 145)" />
          <div className="merch-content">
              <div className="merch-box">
                  {merchData.map(product => {
                    return <MerchCard key={product.key}
                    gradone={product.gradone}
                    gradtwo={product.gradtwo}
                    title={product.name}
                    message={product.desc}
                    img={product.image}
                    />
                  })}
              </div>
          </div>
        </div>
      </div>}
      
    </>
  )
}

export default Merch
