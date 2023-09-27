import React from 'react'
import './Products.scss'
import Product from './Product/Product'


export const Products = ({ innerPage, headingText = "", products }) => {
  return (
    <div className='products-container'>
    {!innerPage
    &&
      <div className='sec-heading'>
        {headingText}
      </div>
    }
      <div className='products'>
        {products?.data?.map((item) => <Product item={item.attributes} key={item.id} id={item.id}/>)}
      </div>
    </div>
  )
}

export default Products;
