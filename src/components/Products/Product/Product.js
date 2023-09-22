import React from 'react'
import './Product.scss'
import prod from '../../../assets/products/boat-airdope.png'

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={prod} alt="prod" />
      </div>
      <div className="prod-details">
        <span className="name">
          Product name assets/ products/ boat-airdope
        </span>
        <span className="price">&#8377;32</span>
      </div>
    </div>
  );
}

export default Product