import React, {useState} from 'react'
import Modal from "../components/Modal"
import { AnimatePresence } from 'framer-motion'
import PaymentForm from './PaymentForm'
const ModalPay  = ({close}) => {
  return (
    <Modal handleClose={close}>
      <PaymentForm/>
    </Modal>
  )
}

const MerchCard = (props) => {
  const [modal, setModal] = useState(false)
  const open = () => setModal(true)
  const close = () => setModal(false)
  return (
    <div className="merch-container">
      <div  className="merch-card">
        <div className="merch-item">
          <div className="merch-circle" style={{background : `linear-gradient(to bottom right, ${props.gradone} , ${props.gradtwo})`}}></div>
          <img className="merch-img" src={props.img} alt="merch"/>
        </div>
        <div className="merch-info">
          <h1 className="merch-name">{props.title}</h1>
          <h3>{props.message}</h3>
          <div className="merch-sizes">
            <button>XS</button>
            <button>S</button>
            <button className="active">M</button>
            <button>L</button>
            <button>XL</button>
          </div>
          <div className="merch-pruchase">
            <button onClick={open}>Buy Now</button>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
      {modal && <ModalPay close={close}/>}
      </AnimatePresence>
    </div>
  )
}

export default MerchCard
