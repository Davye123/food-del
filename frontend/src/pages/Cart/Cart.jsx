import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  
  const navigate = useNavigate();
  return (
    <div className="cart">
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
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2 className="cart-total-title">Cart Total</h2>
          <div className="cart-total-detail">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="cart-divider" />
          <div className="cart-total-detail">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr className="cart-divider" />
          <div className="cart-total-detail cart-total-final">
            <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</p>
          </div>
        </div>
        <button className="checkout-button" onClick={()=>navigate("/order")}>Checkout</button>
      </div>
      <div className="cart-promocode">
        <p className="promocode-title">Have a promocode?</p>
        <div className="cart-promocode-input">
          <input type="text" placeholder="Enter promo code" className="promocode-input" />
          <button className="promocode-submit">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
