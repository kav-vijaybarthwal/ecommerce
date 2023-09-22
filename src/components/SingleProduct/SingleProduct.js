import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus
} from 'react-icons/fa';

import RelatedProducts from './RelatedProducts/RelatedProducts';
import singleProd from '../../assets/products/boat-airdope.png';
import './SingleProduct.scss'

function SingleProduct() {
  return (
    <div className='single-product-main-content' >
      <div className='layout'>
        <div className='single-product-page'>
          <div className='left'>
            <img src={singleProd} alt="singleProd" />
          </div>
          <div className='right'>
            <span className='name'>Product Name</span>
            <span className='price'>price</span>
            <span className='desc'>Product Description</span>
            <div className='cart-buttons' >
              <div className='quantity-buttons'>
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className='add-to-cart-button' >
                <FaCartPlus size={20} />
                Add to cart
              </button>
            </div>
            <span className='divider' />
            <div className='info-items'>
              <span className='text-bold'>
                Category:
                <span>Headphone</span>
              </span>
              <span className='text-bold'>
                Share:
                <span className='social-icons'>
                  <FaTwitter size={16} />
                  <FaFacebookF size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  )
}

export default SingleProduct