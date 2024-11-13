import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { CartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigat =useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (CartItems[item._id] > 0) {
            return (
              <div> <div className='cart-items-title cart-items-item'>
                <img src={item.image} />
                <p>{item.name}</p>
                <p><b style={{fontSize:14}} >₹ </b>{item.price}</p>
                <p>{CartItems[item._id]}</p>
                <p><b style={{fontSize:14}} >₹ </b>{item.price * CartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>{<RemoveCircleOutlineIcon/>}</p>
              </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <p><CurrencyRupeeIcon sx={{ fontSize: 17 }}  className='ruppe'/>{getTotalCartAmount()===0?0:56}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b><CurrencyRupeeIcon sx={{ fontSize: 19 }} className='ruppe'/>{getTotalCartAmount()===0?0:getTotalCartAmount()+56}</b>
            </div>
          </div>
          <button onClick={()=> navigat('/orders')} >PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code,Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart