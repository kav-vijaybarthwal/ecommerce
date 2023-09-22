import React from 'react'
import './Products.scss'
import Product from './Product/Product'


export const Products = ({ innerPage }) => {
  return (
    <div className='products-container'>
    {!innerPage
    &&
      <div className='sec-heading'>
        Section Heading
      </div>
    }
      <div className='products'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Products;
