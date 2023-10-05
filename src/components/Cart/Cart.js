import React, {useContext} from 'react'
import { MdClose } from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'

import './Cart.scss'
import CartItem from './CartItem/CartItem'
import { Context } from '../../utils/context'

const Cart = ({ handleShowCart }) => {
  const {cartItems, cartSubtotal} = useContext(Context)
  return (
    <div className='cart-panel' >
      <div className='opac-layer'></div>
      <div className='cart-content'>
        <div className='cart-header'>
          <span className='heading'>Shopping Cart</span>
          <span className='close-btn' onClick={() => handleShowCart()} >
            <MdClose />
            <span className='text'>Close</span>
          </span>
        </div>
        {!cartItems.length
        ?
        ( <div className='empty-cart'>
          <BsCartX />
          <span>No products in the Cart</span>
          <button onClick={() => handleShowCart()}  className='return-cta' >Return to shop</button>
        </div> )
        :
        (
          <>
          <CartItem />
          <div className='cart-footer'>
            <div className='subtotal'>
              <span className='text'>Subtotal</span>
              <span className='text total'>&#8377; {cartSubtotal}</span>
            </div>
            <div className='button'>
              <button className='checkout-cta'>Checkout</button>
            </div>
          </div>
        </>
        )
        }
        
      </div>
    </div>
  )
}

export default Cart