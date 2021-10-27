import React from 'react'
import { useHistory } from "react-router-dom";
import "../css/Form.css"
const PaymentForm = () => {
  let history = useHistory();

  const redirect = () => {
    history.push('/')
  }
  const handleSubmit = () => {
    console.log("A");
    redirect()
  }
  return (
    <div className="form-container">
      <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}} action="#" className="form">
        <div className="form-input-box">
          <span>card number</span>
          <input type="number" className="form-input"/>
        </div>
        <div className="form-input-box">
          <span>card holder</span>
          <input type="text" className="form-input"/>
        </div>
        <div className="form-input-box">
          <span>address</span>
          <input type="text" className="form-input"/>
        </div>
        <div className="form-flexbox">
          <div className="form-input-box">
            <span>Month</span>
            <input type="number" className="form-input"/>
          </div>
          <div className="form-input-box">
            <span>Year</span>
            <input type="number" className="form-input"/>
          </div>
          <div className="form-input-box">
            <span>CVV</span>
            <input type="number" className="form-input"/>
          </div>
        </div>
        <button type="submit" className="form-submit">Proceed</button>
      </form>
    </div>
  )
}

export default PaymentForm
