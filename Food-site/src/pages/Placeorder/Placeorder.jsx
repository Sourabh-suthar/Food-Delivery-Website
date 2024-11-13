import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context/StoreContext'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Placeorder = () => {
  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text"  placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone ' />
      </div>
      <div className='place-order-right'>
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
            <p><CurrencyRupeeIcon sx={{ fontSize: 17 }} className='ruppe'/>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p><CurrencyRupeeIcon sx={{ fontSize: 17 }} className='ruppe'/>{getTotalCartAmount()===0?0:56}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b><CurrencyRupeeIcon sx={{ fontSize: 18 }} className='ruppe'/>{getTotalCartAmount()===0?0:getTotalCartAmount()+56}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder