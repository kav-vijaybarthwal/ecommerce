import React from 'react'
import './Products.scss'
import Product from './Product/Product'


export const Products = () => {
  return (
    <div className='products-container'>
      <div className='sec-heading'>
        Section Heading
      </div>
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
