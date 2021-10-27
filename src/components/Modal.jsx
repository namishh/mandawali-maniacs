import React from 'react'
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import '../css/Modal.css'
const dropIN = {
  hidden : {
    y : "-100vh",
    opacity : 0
  },
  visible : {
    y  : "0",
    opacity : 1,
    transition : {
      duration : 1,
      type : "spring",
      damping : 25,
      stiffness : 500
    }
  },
  exit : {
    y : "100vh",
    opacity : 0
  }
}
const Modal = ({handleClose, children}) => {
  return (
    <motion.div>
      <Backdrop onClick={handleClose}>
        <motion.div className="modal" variants={dropIN} initial="hidden" animate="visible" exit="exit" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={handleClose}>
            <i className="ph-x-bold"></i>
          </button>
          <div className="modal-content">
            {children}
          </div>
        </motion.div>
      </Backdrop>
    </motion.div>
  )
}

export default Modal
