import React from 'react'
import { MdClose } from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'

import './Cart.scss'
import CartItem from './CartItem/CartItem'

const Cart = ({ handleShowCart }) => {
  return (
    <div className='cart-panel' >
      <div className='opac-layer'></div>
      <div className='cart-content'>
        <div className='cart-header'>
          <span className='heading'>Shopping Cart</span>
          <span className='close-btn'>
            <MdClose />
            <span className='text' onClick={() => handleShowCart()} >Close</span>
          </span>
        </div>
        {/* <div className='empty-cart'>
          <BsCartX />
          <span>No products in the Cart</span>
          <button className='return-cta' >Return to shop</button>
        </div> */}
        <>
          <CartItem />
          <div className='cart-footer'>
            <div className='subtotal'>
              <span className='text'>Subtotal</span>
              <span className='text total'>&#8377; 2342</span>
            </div>
            <div className='button'>
              <button className='checkout-cta'>Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Cart