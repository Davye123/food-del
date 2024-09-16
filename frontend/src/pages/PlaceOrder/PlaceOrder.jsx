import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  
  const totalAmount = getTotalCartAmount()

  return (
    <form className='place-order'>
      <div className='place-order-left'>
          <p className='title'>Order Details</p>
          <div className='multi-fields'>
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="text" placeholder='street' />
          <input type="email" placeholder='Email Address' />
        <div className='multi-fields'>
          <input type="text" placeholder='city' />
          <input type="text" placeholder='state' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='zip code' />
          <input type="text" placeholder='country' />
        </div>
        <input type="text" placeholder='phone' />
      </div>
      <div className='place-order-right'>
      <div className="cart-total">
          <h2 className="cart-total-title">Cart Total</h2>
          <div className="cart-total-detail">
            <p>Subtotal</p>
            <p>${totalAmount}</p>
          </div>
          <hr className="cart-divider" />
          <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>${totalAmount===0?0:2}</p>
          </div>
          <hr className="cart-divider" />
          <div className="cart-total-detail cart-total-final">
            <p>Total</p>
            <p>${totalAmount===0?0:totalAmount + 2}</p>
          </div>
        </div>
        <button type="submit">Proceed to Payment</button>
      </div>
    </form>
  )
}

export default PlaceOrder
